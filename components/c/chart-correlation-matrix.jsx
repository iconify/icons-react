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
		"content": `<style>.cx5aod5of {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3M9 3v18m6-18v18M3 9h18M3 15h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s4zm9n7-a {
  fill: currentColor;
  d: path("M3 9V5a2 2 0 0 1 2-2h4v6Zm6 0h6v6H9Zm6 6h6v4a2 2 0 0 1-2 2h-4Zm-4.25-9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="cx5aod5of"/><path class="s4zm9n7-a"/></g>`,
		"fallback": "uix:chart-correlation-matrix",
	});
}

export default Component;
