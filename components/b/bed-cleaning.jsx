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
		"content": `<style>.sehtgdbto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5V20m0-7.5h16a2 2 0 0 1 2 2V20M3 16.5h18M16.119 3.631l.408.746a1.5 1.5 0 0 0 .596.596l.746.408a.705.705 0 0 1 0 1.238l-.746.408a1.5 1.5 0 0 0-.596.596l-.408.746a.705.705 0 0 1-1.238 0l-.408-.746a1.5 1.5 0 0 0-.596-.596l-.746-.408a.705.705 0 0 1 0-1.238l.746-.408a1.5 1.5 0 0 0 .596-.596l.408-.746a.705.705 0 0 1 1.238 0");
}
</style><path class="sehtgdbto"/>`,
		"fallback": "uix:bed-cleaning",
	});
}

export default Component;
