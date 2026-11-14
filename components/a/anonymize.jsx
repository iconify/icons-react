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
		"content": `<style>.am3yadn4j {
  fill: currentColor;
  d: path("M7.75 5.75h8.5A1.25 1.25 0 0 1 17.5 7a1.25 1.25 0 0 1-1.25 1.25h-8.5A1.25 1.25 0 0 1 6.5 7a1.25 1.25 0 0 1 1.25-1.25");
}

.dicleqbqt {
  d: path("M4.5 19.5c0-3.25 3.25-5.5 7.5-5.5s7.5 2.25 7.5 5.5c0 .6-.4 1-1 1h-13c-.6 0-1-.4-1-1M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dicleqbqt"/><path class="am3yadn4j"/></g>`,
		"fallback": "uix:anonymize",
	});
}

export default Component;
