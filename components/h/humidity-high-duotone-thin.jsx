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
		"content": `<style>.djz5e420y {
  fill: currentColor;
  d: path("m15 11 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ildco7byy {
  fill: currentColor;
  d: path("m11 16 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kcvg8_brd {
  d: path("m8 7 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.riqqdm93h {
  d: path("m15 11 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.uhsn5wb8z {
  fill: currentColor;
  d: path("m8 7 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wnk6eob9l {
  d: path("m11 16 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}
</style><g class="hntgybcog"><path class="uhsn5wb8z"/><path class="djz5e420y"/><path class="ildco7byy"/><path class="kcvg8_brd"/><path class="riqqdm93h"/><path class="wnk6eob9l"/></g>`,
		"fallback": "iconmind:humidity-high-duotone-thin",
	});
}

export default Component;
