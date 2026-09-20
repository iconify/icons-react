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
		"content": `<style>.efcgw323v {
  d: path("M5 16a3 3 0 0 1 6 0");
}

.gwl0nvbom {
  d: path("M6 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1lmw_bdv {
  d: path("M13 11h6");
}

.s3lwy2n0b {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.x-2ssubtg {
  d: path("M13 15h6");
}
</style><g class="hntgybcog"><path class="s3lwy2n0b"/><path class="gwl0nvbom"/><path class="efcgw323v"/><path class="l1lmw_bdv"/><path class="x-2ssubtg"/></g>`,
		"fallback": "iconmind:bio-outline-thin",
	});
}

export default Component;
