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
		"content": `<style>.gh51vquqb {
  fill: currentColor;
  d: path("M3.75 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m8 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3-4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M5.25 17.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m11 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ryu1lrrio {
  d: path("M2.5 13v7.5h8V13m3 0v7.5h8V13");
}
</style><g class="hntgybcog"><path class="ryu1lrrio"/><path class="gh51vquqb"/></g>`,
		"fallback": "uix:group-by",
	});
}

export default Component;
