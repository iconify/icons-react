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

.mfuzlg8fv {
  d: path("M18.867 14.492a3.5 3.5 0 1 1-5.734 0");
}

.w_92grwrq {
  d: path("M6.5 10.5V21M6 2.5h1A3.5 3.5 0 0 1 10.5 6v1A3.5 3.5 0 0 1 7 10.5H6A3.5 3.5 0 0 1 2.5 7V6A3.5 3.5 0 0 1 6 2.5m-1.25 4h3.5m6.25 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 2.75v3.25h3.5L21 19");
}
</style><g class="hntgybcog"><path class="w_92grwrq"/><path class="mfuzlg8fv"/></g>`,
		"fallback": "uix:accessible-bus-stop",
	});
}

export default Component;
