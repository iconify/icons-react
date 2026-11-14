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
		"content": `<style>.a5fsbcbix {
  fill: currentColor;
  d: path("M8.5 19.5V9.25C9.5 6 10.5 4 12 4s2.5 2 3.5 5.25V19.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nxaihbbaq {
  d: path("M2.5 19.5C7 19.5 8.5 4 12 4s5 15.5 9.5 15.5");
}

.xsz8hrbvx {
  d: path("M2.5 19.5h19");
}
</style><g class="hntgybcog"><path class="nxaihbbaq"/><path class="a5fsbcbix"/><path class="xsz8hrbvx"/></g>`,
		"fallback": "uix:confidence-interval",
	});
}

export default Component;
