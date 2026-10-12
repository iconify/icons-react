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

.wboxv9bpl {
  cx: 5.5px;
  cy: 18.5px;
  r: 2.75px;
}

.xqk0nkbqc {
  d: path("M8.25 18.5h7.5M18 15.75l-2.25-12h2.5M8.75 14c0-3 1.75-4.75 5-4.75c0 3-1.75 4.75-5 4.75");
}

.xs_28x-yu {
  cx: 18.5px;
  cy: 18.5px;
  r: 2.75px;
}
</style><g class="hntgybcog"><circle class="wboxv9bpl"/><circle class="xs_28x-yu"/><path class="xqk0nkbqc"/></g>`,
		"fallback": "iconoven:electric-scooter-eco",
	});
}

export default Component;
