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
		"content": `<style>.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nitbd2d6o {
  d: path("M7.75 16.25v-3m4.25 3v-8.5m4.25 8.5v-5.5");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="nitbd2d6o"/></g>`,
		"fallback": "iconoven:analytics",
	});
}

export default Component;
