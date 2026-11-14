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
		"content": `<style>.e_f-l246p {
  d: path("M7.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-5.5h.01m4.74 8.25h.01m-9.51 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hz1awnb9o {
  d: path("M2.5 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}

.mi9qgdbbz {
  d: path("M10.5 4h3a8 8 0 0 1 0 16h-3");
}
</style><g class="hntgybcog"><path class="hz1awnb9o"/><path class="mi9qgdbbz"/><path class="e_f-l246p"/></g>`,
		"fallback": "uix:brake-drum",
	});
}

export default Component;
