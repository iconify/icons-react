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
		"content": `<style>.bhe6v8blv {
  d: path("M17.5 4.75q-1.125 1.125 0 2.25c1.125 1.125.75 1.5 0 2.25s-.75 1.5 0 2.25m3-6.75q-1.125 1.125 0 2.25c1.125 1.125.75 1.5 0 2.25s-.75 1.5 0 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ija99bbgb {
  width: 3px;
  height: 3.5px;
  x: 11px;
  y: 6.25px;
  rx: 0.75px;
}

.izp7yacro {
  d: path("M9.5 5H4.25q-1.5 0-1.5 1.5v3q0 1.5 1 1.5t1.13 1.49l.49 5.52Q5.5 19.5 7 19.5h1q1.5 0 1.37-1.49l-.49-5.52Q8.75 11 9.88 11Q11 11 11 9.5v-3Q11 5 9.5 5");
}
</style><g class="hntgybcog"><path class="izp7yacro"/><rect class="ija99bbgb"/><path class="bhe6v8blv"/></g>`,
		"fallback": "iconoven:heat-gun",
	});
}

export default Component;
