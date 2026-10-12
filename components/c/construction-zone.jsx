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
		"content": `<style>.afea55bzh {
  d: path("m13.24 3.99l6.77 6.77q1.24 1.24 0 2.48l-6.77 6.77q-1.24 1.24-2.48 0l-6.77-6.77q-1.24-1.24 0-2.48l6.77-6.77q1.24-1.24 2.48 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ro0e9_bbz {
  d: path("M8.25 14.75h7.5m-6.75 0a3 3 0 0 1 6 0");
}
</style><g class="hntgybcog"><path class="afea55bzh"/><path class="ro0e9_bbz"/></g>`,
		"fallback": "iconoven:construction-zone",
	});
}

export default Component;
