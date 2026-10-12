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
		"content": `<style>.mjxiic0by {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 9.25h15.5a1 1 0 0 1 .97 1.24l-1.85 7.65a2.5 2.5 0 0 1-2.43 1.91H7.56a2.5 2.5 0 0 1-2.43-1.91l-1.85-7.65a1 1 0 0 1 .97-1.24m3.5 0l2.75-5m5.75 5l-2.75-5m-4.75 8.5v3.5m3.25-3.5v3.5m3.25-3.5v3.5");
}
</style><path class="mjxiic0by"/>`,
		"fallback": "iconoven:basket",
	});
}

export default Component;
