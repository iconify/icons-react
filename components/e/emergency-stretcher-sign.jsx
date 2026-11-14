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
		"content": `<style>.cawe33bcd {
  d: path("M7.75 2.5h8.5a5.25 5.25 0 0 1 5.25 5.25v8.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-8.5A5.25 5.25 0 0 1 7.75 2.5M5.5 13.75h13m-10 0V18m7-4.25V18");
}

.dmakfdcxt {
  d: path("M6.25 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M11.5 11h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cawe33bcd"/><path class="dmakfdcxt"/></g>`,
		"fallback": "uix:emergency-stretcher-sign",
	});
}

export default Component;
