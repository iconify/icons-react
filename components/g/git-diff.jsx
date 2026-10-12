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
		"content": `<style>.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uiszt6bbq {
  d: path("M12 6.5v5M9.5 9h5m-5 7h5");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="uiszt6bbq"/></g>`,
		"fallback": "iconoven:git-diff",
	});
}

export default Component;
