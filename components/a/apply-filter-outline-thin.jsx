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
		"content": `<style>.ckcr2acsn {
  d: path("m10 16 2 2 2 -2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgnf7sbfg {
  d: path("m10 19 2 2 2 -2");
}

.mjze8rg7o {
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
}
</style><g class="hntgybcog"><path class="mjze8rg7o"/><path class="ckcr2acsn"/><path class="jgnf7sbfg"/></g>`,
		"fallback": "iconmind:apply-filter-outline-thin",
	});
}

export default Component;
