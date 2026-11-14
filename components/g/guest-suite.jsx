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
		"content": `<style>.h50zkmbpu {
  d: path("M6 21.5V4a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 4v17.5m-15.5 0h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p3tkfqbus {
  d: path("M13.25 11.5h1.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5");
}

.pu541iblo {
  d: path("M13 13.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 3.5h2");
}
</style><g class="hntgybcog"><path class="h50zkmbpu"/><path class="p3tkfqbus"/><path class="pu541iblo"/></g>`,
		"fallback": "uix:guest-suite",
	});
}

export default Component;
