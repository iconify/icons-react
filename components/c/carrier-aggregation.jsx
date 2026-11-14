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
		"content": `<style>.t405s5-hk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5c4.5 0 4.5 7 9 7m-9 7c4.5 0 4.5-7 9-7m0 0c1.5-4.5 3.5-4.5 5 0s3.5 4.5 5 0");
}
</style><path class="t405s5-hk"/>`,
		"fallback": "uix-sharp:carrier-aggregation",
	});
}

export default Component;
