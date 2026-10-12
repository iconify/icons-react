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

.l6qhetquz {
  d: path("M2.75 7.25h.5a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-1.5 1.5h-.5m18.5-9.5h-.5a1.5 1.5 0 0 0-1.5 1.5v6.5a1.5 1.5 0 0 0 1.5 1.5h.5");
}

.uhce2lrvj {
  width: 8.5px;
  height: 15.5px;
  x: 7.75px;
  y: 4.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="uhce2lrvj"/><path class="l6qhetquz"/></g>`,
		"fallback": "iconoven:carousel",
	});
}

export default Component;
