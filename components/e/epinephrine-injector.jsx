import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yc__b3b4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.399 16.419l12.02-12.02l3.182 3.182l-12.02 12.02Zm8.485-8.485l3.182 3.182m-8.132 1.768l3.182 3.182M9.348 11.47l3.182 3.182m-8.485 3.889l1.237-1.238l1.415 1.415l-1.238 1.237Z");
}
</style><path class="yc__b3b4j"/>`,
		"fallback": "uix-sharp:epinephrine-injector",
	});
}

export default Component;
