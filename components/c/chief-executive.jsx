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
		"content": `<style>.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgc1jcb7u {
  d: path("M5.75 12a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0M12 2.5v19M2.5 12h19M5.25 5.25l13.5 13.5m0-13.5l-13.5 13.5");
}
</style><g class="hntgybcog"><path class="xgc1jcb7u"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:chief-executive",
	});
}

export default Component;
