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
		"content": `<style>.b5lu86bck {
  d: path("M6 6h5a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 11 18H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh45z_ozd {
  d: path("M5.25 14.75h6.5m-5.5 0V12a2.25 2.25 0 0 1 4.5 0v2.75m6.663-5.875a6.25 6.25 0 0 1 0 6.25m2.598-7.75a9.25 9.25 0 0 1 0 9.25");
}
</style><g class="hntgybcog"><path class="b5lu86bck"/><path class="kh45z_ozd"/></g>`,
		"fallback": "uix:fire-alarm-sounding",
	});
}

export default Component;
