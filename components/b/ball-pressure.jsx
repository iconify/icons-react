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
		"content": `<style>.fvnv2zbfr {
  d: path("M4.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wy_24m-4c {
  d: path("M12 18za1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-.5A1.5 1.5 0 0 1 12 18m0-7.5L15.5 7M12 10.5h.01");
}
</style><g class="hntgybcog"><path class="fvnv2zbfr"/><path class="wy_24m-4c"/></g>`,
		"fallback": "uix:ball-pressure",
	});
}

export default Component;
