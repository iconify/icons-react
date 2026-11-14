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
		"content": `<style>.dtxdwabaj {
  d: path("M12 10c0-3 2-4.5 4.5-4.5M13.75 13c2.5 1.5 3 4 1.75 6.25M10.25 13c-2.5 1.5-5 .5-6-1.75");
}

.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-s9u8vws {
  d: path("M7.75 2.5h8.5a5.25 5.25 0 0 1 5.25 5.25v8.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-8.5A5.25 5.25 0 0 1 7.75 2.5");
}
</style><g class="hntgybcog"><path class="u-s9u8vws"/><path class="fv5pcnpmp"/><path class="dtxdwabaj"/></g>`,
		"fallback": "uix:fan-cooling",
	});
}

export default Component;
