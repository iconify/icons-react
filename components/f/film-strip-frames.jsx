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
		"content": `<style>.bw7ztebfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v12a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5m1 0v19m7-19v19M8.5 9h7m-7 6h7M6.25 5.75V6m0 5.75V12m0 5.75V18m11.5-12.25V6m0 5.75V12m0 5.75V18");
}
</style><path class="bw7ztebfx"/>`,
		"fallback": "uix:film-strip-frames",
	});
}

export default Component;
