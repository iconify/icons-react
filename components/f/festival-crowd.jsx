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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lq-ucabjq {
  d: path("M8.75 6.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m-1.25 14c0-4.5 2-7.5 4.5-7.5s4.5 3 4.5 7.5M2.5 11A2.25 2.25 0 1 0 7 11a2.25 2.25 0 1 0-4.5 0");
}

.wgxv1bckp {
  d: path("M2.5 20.5c0-3 1.5-4.75 3.5-4.75c.75 0 1.5.25 2 .75m9-5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4.5 9.5c0-3-1.5-4.75-3.5-4.75c-.75 0-1.5.25-2 .75");
}
</style><g class="hntgybcog"><path class="lq-ucabjq"/><path class="wgxv1bckp"/></g>`,
		"fallback": "uix:festival-crowd",
	});
}

export default Component;
