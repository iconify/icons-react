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
		"content": `<style>.b590e0biw {
  d: path("M4.25 7.5h15.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 12H4.25a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 7.5M3.5 12v8A1.5 1.5 0 0 0 5 21.5h14a1.5 1.5 0 0 0 1.5-1.5v-8M9 7.5v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9w279biv {
  d: path("M10.75 16a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 17.25v1.5");
}
</style><g class="hntgybcog"><path class="b590e0biw"/><path class="j9w279biv"/></g>`,
		"fallback": "uix:cash-tin",
	});
}

export default Component;
