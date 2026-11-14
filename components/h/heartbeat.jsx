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

.slvilrbvx {
  d: path("M18.212 14.768C15.569 17.819 12 20 12 20s-3.54-2.163-6.18-5.195M3.017 9.184A6 6 0 0 1 3 8.75C3 6.1 5.1 4 7.75 4C9.5 4 11.1 5 12 6.5C12.9 5 14.5 4 16.25 4C18.9 4 21 6.1 21 8.75q0 .243-.021.484");
}

.t-xiagv9e {
  d: path("M2 12h5.5l2-3.5l2.5 7l2-5l1.5 1.5H22");
}
</style><g class="hntgybcog"><path class="slvilrbvx"/><path class="t-xiagv9e"/></g>`,
		"fallback": "uix:heartbeat",
	});
}

export default Component;
