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

.ts3nldyxi {
  cx: 17.75px;
  cy: 16.75px;
  r: 2.5px;
}

.x8j8gccvj {
  d: path("m13.14 9.8l1.06 1.06q1.24 1.24 0 2.48L7.84 19.7q-1.24 1.24-2.48 0L4.3 18.64q-1.24-1.24 0-2.48l6.36-6.36q1.24-1.24 2.48 0m.61.45l5-5");
}
</style><g class="hntgybcog"><path class="x8j8gccvj"/><circle class="ts3nldyxi"/></g>`,
		"fallback": "iconoven:cricket-bat",
	});
}

export default Component;
