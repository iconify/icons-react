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
		"content": `<style>.g9m3m9bxt {
  d: path("M14.75 5.75v3.5M2.75 9h3m-1.5 3.25h2m-3.5 3.25h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.omxg5cmti {
  width: 13px;
  height: 13px;
  x: 8.25px;
  y: 5.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="omxg5cmti"/><path class="g9m3m9bxt"/></g>`,
		"fallback": "iconoven:express-box",
	});
}

export default Component;
