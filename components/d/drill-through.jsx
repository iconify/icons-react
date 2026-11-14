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

.hp0lc9blw {
  d: path("M5 8h5.5l3 3v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2");
}

.jrrd-mbli {
  d: path("M10.5 8v2a1 1 0 0 0 1 1h2m3-8.5V5a1 1 0 0 0 1 1H20M2 13.25h16M15.75 11L18 13.25l-2.25 2.25");
}

.tzc3d7byn {
  d: path("M8 8V4.5a2 2 0 0 1 2-2h6.5L20 6v8a2 2 0 0 1-2 2h-4.5");
}
</style><g class="hntgybcog"><path class="hp0lc9blw"/><path class="tzc3d7byn"/><path class="jrrd-mbli"/></g>`,
		"fallback": "uix:drill-through",
	});
}

export default Component;
