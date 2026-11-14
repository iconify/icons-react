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

.nsgzosmuy {
  d: path("M15.234 2.898L14 8.536m4.266-3.888L14 8.536M5.734 19.352L10 15.464m-1.234 5.638L10 15.464");
}

.t_vvzubya {
  fill: currentColor;
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="t_vvzubya"/><path class="nsgzosmuy"/></g>`,
		"fallback": "uix:black-hole-jet",
	});
}

export default Component;
