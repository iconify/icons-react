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
		"content": `<style>.aiy0qhc5c {
  d: path("M4.5 16q7.5-5 15 0M4 19.5q2.5-1.5 5 0t5 0t5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzvv7l7zq {
  d: path("M11.5 7q2 4 1 6.5m-1-6.5C9 4.5 6 4.5 3.5 6.5m8 .5c1.5-3 5.5-3.5 9-1.5");
}
</style><g class="hntgybcog"><path class="hzvv7l7zq"/><path class="aiy0qhc5c"/></g>`,
		"fallback": "uix:desert-oasis",
	});
}

export default Component;
