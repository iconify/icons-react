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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gpgtzfb8u {
  d: path("M16.5 6.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nj6hdwb2d {
  d: path("M7 12h7.5");
}

.olmwgycdy {
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tt7ypiikb {
  d: path("M5 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zgod0v2rr {
  d: path("M7 8.5v7");
}
</style><g class="hntgybcog"><path class="tt7ypiikb"/><path class="zgod0v2rr"/><path class="du3agkbjb"/><path class="nj6hdwb2d"/><path class="olmwgycdy"/><path class="gpgtzfb8u"/></g>`,
		"fallback": "iconmind:git-branch-remove-outline-thin",
	});
}

export default Component;
