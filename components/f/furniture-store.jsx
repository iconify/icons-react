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
		"content": `<style>.hq2_7u61f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M6.5 15v-2A1.5 1.5 0 0 1 8 11.5h8a1.5 1.5 0 0 1 1.5 1.5v2m-14 0H7v4.5H3.5ZM17 15h3.5v4.5H17ZM7 17h10M5.25 19.5v2m13.5-2v2");
}
</style><path class="hq2_7u61f"/>`,
		"fallback": "uix-sharp:furniture-store",
	});
}

export default Component;
