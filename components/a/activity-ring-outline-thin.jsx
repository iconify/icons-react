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
		"content": `<style>.a249dcbsw {
  d: path("M12 6.5A5.5 5.5 0 1 1 6.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6trofguq {
  d: path("M12 21a9 9 0 1 1 9 -9");
}
</style><g class="hntgybcog"><path class="m6trofguq"/><path class="a249dcbsw"/></g>`,
		"fallback": "iconmind:activity-ring-outline-thin",
	});
}

export default Component;
