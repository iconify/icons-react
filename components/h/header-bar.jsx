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
		"content": `<style>.b4-h3qmyo {
  d: path("M5.25 3.75h13.5a2.5 2.5 0 0 1 2.5 2.5V9H2.75V6.25a2.5 2.5 0 0 1 2.5-2.5");
}

.fr9wc8ere {
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
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="b4-h3qmyo"/></g>`,
		"fallback": "iconoven:header-bar",
	});
}

export default Component;
