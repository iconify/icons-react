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

.qaz_ubbsu {
  d: path("M2.5 12C5 7.5 8.25 5.5 12 5.5s7 2 9.5 6.5c-2.5 4.5-5.75 6.5-9.5 6.5s-7-2-9.5-6.5");
}

.rkxhx1b5u {
  d: path("M13.283 8.476a3.75 3.75 0 0 1 2.241 2.241m0 2.566a3.75 3.75 0 0 1-2.241 2.241m-2.566 0a3.75 3.75 0 0 1-2.241-2.241m0-2.566a3.75 3.75 0 0 1 2.241-2.241M12 12h.01");
}
</style><g class="hntgybcog"><path class="qaz_ubbsu"/><path class="rkxhx1b5u"/></g>`,
		"fallback": "uix:eye-gaze-control",
	});
}

export default Component;
