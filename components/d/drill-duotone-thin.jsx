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
		"content": `<style>.ej8q8nr7x {
  fill: currentColor;
  d: path("M4 5h10v6H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ez1_3xbuo {
  d: path("M14 8h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nguhiybnr {
  d: path("M4 5h10v6H4Z");
}

.r411km12t {
  d: path("M6 11v9h4v-9");
}
</style><g class="hntgybcog"><path class="ej8q8nr7x"/><path class="nguhiybnr"/><path class="r411km12t"/><path class="ez1_3xbuo"/></g>`,
		"fallback": "iconmind:drill-duotone-thin",
	});
}

export default Component;
