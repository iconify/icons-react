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
		"content": `<style>.f228956be {
  d: path("M19 11v10");
}

.g9fextbgn {
  d: path("M5 11v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ie2d97bxq {
  fill: currentColor;
  d: path("M13 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k187sabpz {
  d: path("M2 11h20");
}

.k2jzr9u7f {
  d: path("M5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wnz9a7lxg {
  fill: currentColor;
  d: path("M5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zcnxk5bij {
  d: path("M13 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="wnz9a7lxg"/><path class="ie2d97bxq"/><path class="k187sabpz"/><path class="g9fextbgn"/><path class="f228956be"/><path class="k2jzr9u7f"/><path class="zcnxk5bij"/></g>`,
		"fallback": "iconmind:dining-table-duotone-thin",
	});
}

export default Component;
