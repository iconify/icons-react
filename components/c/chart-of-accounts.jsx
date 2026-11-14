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
		"content": `<style>.f9ie41bja {
  d: path("M4.75 16.5V12h14.5v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ik_w0ub8r {
  d: path("M10.688 2.5h2.625A2.19 2.19 0 0 1 15.5 4.688v.625A2.19 2.19 0 0 1 13.313 7.5h-2.625A2.19 2.19 0 0 1 8.5 5.313v-.625A2.19 2.19 0 0 1 10.688 2.5m-6.438 14h1A1.75 1.75 0 0 1 7 18.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 19.75v-1.5a1.75 1.75 0 0 1 1.75-1.75M12 7.5v9");
}
</style><g class="hntgybcog"><path class="ik_w0ub8r"/><path class="f9ie41bja"/></g>`,
		"fallback": "uix:chart-of-accounts",
	});
}

export default Component;
