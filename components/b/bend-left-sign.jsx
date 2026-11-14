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

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}

.u18tiwbnj {
  d: path("m8.75 9.25l2-2l2 2");
}

.zeluocbvi {
  d: path("M13.25 16.5v-2.75c0-1.75-2.5-1.75-2.5-3.5v-3");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="zeluocbvi"/><path class="u18tiwbnj"/></g>`,
		"fallback": "uix:bend-left-sign",
	});
}

export default Component;
