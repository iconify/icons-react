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
		"content": `<style>.a5uqb5btg {
  d: path("M9 14v4");
}

.eijuybbnf {
  d: path("M3 18v-4h6v-4h6v8Z");
}

.gb826cbxw {
  fill: currentColor;
  d: path("M16.5 6h3A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 16.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eijuybbnf"/><path class="gb826cbxw"/><path class="a5uqb5btg"/></g>`,
		"fallback": "uix:clinical-trial-phase",
	});
}

export default Component;
