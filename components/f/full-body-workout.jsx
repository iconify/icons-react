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
		"content": `<style>.f0d1fygka {
  d: path("M10 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myeclem6u {
  d: path("m2.5 6l9.5 4l9.5-4M12 10v4.5m-6.5 7l6.5-7l6.5 7");
}
</style><g class="hntgybcog"><path class="f0d1fygka"/><path class="myeclem6u"/></g>`,
		"fallback": "uix:full-body-workout",
	});
}

export default Component;
