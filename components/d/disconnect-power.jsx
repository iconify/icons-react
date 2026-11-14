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
		"content": `<style>.q3aa3pb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7.5H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h2.5Zm0 2.5H11m-2.5 4H11m6.5-9.5h.5A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5h-.5A3.5 3.5 0 0 1 14 16V8a3.5 3.5 0 0 1 3.5-3.5m.25 5.5h.01m-.01 4h.01");
}
</style><path class="q3aa3pb4o"/>`,
		"fallback": "uix:disconnect-power",
	});
}

export default Component;
