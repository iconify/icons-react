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

.peesphbou {
  d: path("M4.75 12h14.5v6.25a3 3 0 0 1-3 3h-8.5a3 3 0 0 1-3-3Zm5.75 3.25h3");
}

.wphdj1ldu {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="wphdj1ldu"/><path class="peesphbou"/></g>`,
		"fallback": "iconoven:bottom-sheet",
	});
}

export default Component;
