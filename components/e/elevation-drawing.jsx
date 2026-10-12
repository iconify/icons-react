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

.hoi44xq4a {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.q9prak07e {
  d: path("M5.5 17.5h13M7 17.5v-6l5-4.25l5 4.25v6m-6.5 0V14h3v3.5");
}
</style><g class="hntgybcog"><rect class="hoi44xq4a"/><path class="q9prak07e"/></g>`,
		"fallback": "iconoven:elevation-drawing",
	});
}

export default Component;
