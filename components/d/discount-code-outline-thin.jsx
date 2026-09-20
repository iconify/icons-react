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
		"content": `<style>.ew8lc9fxa {
  d: path("M10 11v6");
}

.fpad0ccyb {
  d: path("M14 11v6");
}

.hgb-t7boy {
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="hntgybcog"><path class="w3hyiobto"/><path class="hgb-t7boy"/><path class="ew8lc9fxa"/><path class="fpad0ccyb"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:discount-code-outline-thin",
	});
}

export default Component;
