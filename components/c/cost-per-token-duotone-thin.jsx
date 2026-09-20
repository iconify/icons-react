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
		"content": `<style>.an7tqs10g {
  d: path("M10 12h3");
}

.h0r-78wsa {
  d: path("M17 10v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5be34b7d {
  d: path("M13 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.qq9eov2ie {
  fill: currentColor;
  d: path("M2 12a3 3 0 0 1 3 -3 3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ry_f-ms3l {
  d: path("M2 12a3 3 0 0 1 3 -3 3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3");
}

.ur9jjfbgq {
  fill: currentColor;
  d: path("M13 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="qq9eov2ie"/><path class="ur9jjfbgq"/><path class="ry_f-ms3l"/><path class="an7tqs10g"/><path class="i5be34b7d"/><path class="h0r-78wsa"/></g>`,
		"fallback": "iconmind:cost-per-token-duotone-thin",
	});
}

export default Component;
