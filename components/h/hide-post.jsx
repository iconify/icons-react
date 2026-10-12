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
		"content": `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.cf8uv3j1k {
  d: path("M6.5 12C7.75 9.75 9.75 8.5 12 8.5s4.25 1.25 5.5 3.5c-1.25 2.25-3.25 3.5-5.5 3.5S7.75 14.25 6.5 12m.25 5.25l10.5-10.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="cf8uv3j1k"/></g>`,
		"fallback": "iconoven:hide-post",
	});
}

export default Component;
