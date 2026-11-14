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
		"content": `<style>.i0cvbfg_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 13.5h8.75A2.625 2.625 0 0 1 19 16.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 18.875v-2.75A2.625 2.625 0 0 1 7.625 13.5M3.5 10.75h17M12 2.5v8.25m-3-3l3 3l3-3");
}
</style><path class="i0cvbfg_i"/>`,
		"fallback": "uix:force-push",
	});
}

export default Component;
