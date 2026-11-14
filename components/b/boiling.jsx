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
		"content": `<style>.ak7d1-b9g {
  d: path("M3.5 9Q5 9 5 10.5v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M5 12.5h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.njlekq5-z {
  d: path("M7.75 17.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7-1.75h.01M10 6.25C9 5 11 3.75 10 2.5m4 3.75C13 5 15 3.75 14 2.5");
}
</style><g class="hntgybcog"><path class="ak7d1-b9g"/><path class="njlekq5-z"/></g>`,
		"fallback": "uix:boiling",
	});
}

export default Component;
