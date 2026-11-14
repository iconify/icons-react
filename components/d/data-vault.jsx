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
		"content": `<style>.a0moafbds {
  d: path("M8.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ichb7zyai {
  d: path("M4.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.sfobgylmy {
  fill: currentColor;
  d: path("M3.75 6.5zA1.25 1.25 0 0 1 5 7.75v.5A1.25 1.25 0 0 1 3.75 9.5A1.25 1.25 0 0 1 2.5 8.25v-.5A1.25 1.25 0 0 1 3.75 6.5m0 8zA1.25 1.25 0 0 1 5 15.75v.5a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25v-.5a1.25 1.25 0 0 1 1.25-1.25");
}

.y7z0pac6a {
  fill: currentColor;
  d: path("M11.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.zu7exta_u {
  d: path("m10.75 9.75l4.5 4.5m0-4.5l-4.5 4.5");
}
</style><g class="hntgybcog"><path class="ichb7zyai"/><path class="sfobgylmy"/><path class="a0moafbds"/><path class="y7z0pac6a"/><path class="zu7exta_u"/></g>`,
		"fallback": "uix:data-vault",
	});
}

export default Component;
