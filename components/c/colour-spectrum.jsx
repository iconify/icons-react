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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jyofzvxlg {
  d: path("M5.5 15a6.5 6.5 0 0 1 13 0");
}

.pendosb4v {
  d: path("M8.5 15a3.5 3.5 0 0 1 7 0m-13 3h19");
}

.rea0e7b2m {
  d: path("M2.5 15a9.5 9.5 0 0 1 19 0");
}
</style><g class="hntgybcog"><path class="rea0e7b2m"/><path class="jyofzvxlg"/><path class="pendosb4v"/></g>`,
		"fallback": "uix:colour-spectrum",
	});
}

export default Component;
