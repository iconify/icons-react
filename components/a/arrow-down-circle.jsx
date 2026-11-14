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
		"content": `<style>.ate26fxem {
  d: path("m16 12.5l-4 4l-4-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k55m1xbir {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 7.5v9");
}
</style><g class="hntgybcog"><path class="k55m1xbir"/><path class="ate26fxem"/></g>`,
		"fallback": "uix:arrow-down-circle",
	});
}

export default Component;
