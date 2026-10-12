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
		"content": `<style>.drk7r8b2q {
  d: path("M14.5 7.5v9a2 2 0 1 0 2-2h-9a2 2 0 1 0 2 2v-9a2 2 0 1 0-2 2h9a2 2 0 1 0-2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7t-2o-_e {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 4px;
}
</style><g class="hntgybcog"><rect class="l7t-2o-_e"/><path class="drk7r8b2q"/></g>`,
		"fallback": "iconoven:command-key",
	});
}

export default Component;
