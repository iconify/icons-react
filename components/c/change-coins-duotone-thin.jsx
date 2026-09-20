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
		"content": `<style>.cr-7ikbnz {
  fill: currentColor;
  d: path("M8.5 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dga0cbz_z {
  fill: currentColor;
  d: path("M13.5 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gae_-ztyd {
  d: path("M13.5 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lvh9_ibac {
  d: path("M8.5 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.p2xnau24c {
  fill: currentColor;
  d: path("M2.5 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.quhyyobjk {
  d: path("M2.5 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="cr-7ikbnz"/><path class="p2xnau24c"/><path class="dga0cbz_z"/><path class="lvh9_ibac"/><path class="quhyyobjk"/><path class="gae_-ztyd"/></g>`,
		"fallback": "iconmind:change-coins-duotone-thin",
	});
}

export default Component;
