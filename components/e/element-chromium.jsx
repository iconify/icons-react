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

.kebju1mox {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3");
}

.lml-gccja {
  d: path("m7.189 13.509l1.212-3.5A1.5 1.5 0 0 1 9.818 9h4.364a1.5 1.5 0 0 1 1.417 1.009l1.212 3.5a1.5 1.5 0 0 1-1.418 1.991H8.607a1.5 1.5 0 0 1-1.418-1.991M10 12.25h3");
}
</style><g class="hntgybcog"><path class="kebju1mox"/><path class="lml-gccja"/></g>`,
		"fallback": "uix:element-chromium",
	});
}

export default Component;
