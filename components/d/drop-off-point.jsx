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
		"content": `<style>.c1ofi6nid {
  d: path("M4.25 16.25h15.5M12 2.75v8.5m-3.5-3.5l3.5 3.5l3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywppwfrrh {
  width: 15.5px;
  height: 7.5px;
  x: 4.25px;
  y: 13.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="ywppwfrrh"/><path class="c1ofi6nid"/></g>`,
		"fallback": "iconoven:drop-off-point",
	});
}

export default Component;
