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
		"content": `<style>.emvotkb4z {
  d: path("M4 20 20 4");
}

.goxocdc6s {
  d: path("M10 4h10v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ireg5-o3k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zpv32rbfe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 4h10v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ireg5-o3k"/><path class="zpv32rbfe"/><path class="emvotkb4z"/><path class="goxocdc6s"/></g>`,
		"fallback": "iconmind:arrow-external-duotone-thin",
	});
}

export default Component;
