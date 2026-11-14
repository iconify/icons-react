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

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}

.pb9-4lbro {
  d: path("M12 6.25c1.25 2.5 3.5 3.5 3.5 6.5a3.5 3.5 0 0 1-7 0C8.5 11 9.25 10 10.25 9c.25 1.5.75 2 1.25 2.25c0-2-.5-3.5.5-5");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="pb9-4lbro"/></g>`,
		"fallback": "uix:hazard-class-4",
	});
}

export default Component;
