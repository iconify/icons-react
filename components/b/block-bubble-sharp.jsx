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
		"content": `<style>.hk4_ptb-x {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.75px;
}

.s1-uigb4b {
  d: path("M3.25 20.75c0-3.5 2.8-6.25 6.25-6.25h1.364L12 15");
}

.v2el3udsi {
  cx: 9.5px;
  cy: 7.5px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ypu6wob8i {
  d: path("m14.85 14.85l5.3 5.3");
}
</style><g class="x2cwu0gfd"><circle class="v2el3udsi"/><path class="s1-uigb4b"/><circle class="hk4_ptb-x"/><path class="ypu6wob8i"/></g>`,
		"fallback": "iconoven:block-bubble-sharp",
	});
}

export default Component;
