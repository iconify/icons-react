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

.l087an1gy {
  d: path("M2.5 11L12 3l9.5 8");
}

.rhkxz0bfq {
  d: path("M5 9v10.5c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9M7.5 12v7");
}

.uvyxdqbqt {
  d: path("M7.5 15.5h7.75c.75 0 1.25.5 1.25 1.25V19M10 12.75h1.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75");
}
</style><g class="hntgybcog"><path class="l087an1gy"/><path class="rhkxz0bfq"/><path class="uvyxdqbqt"/></g>`,
		"fallback": "uix:home-care",
	});
}

export default Component;
