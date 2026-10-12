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
		"content": `<style>.ewfei7nhl {
  d: path("M6.5 12v3m2-3V9m0-5.5h5a.5.5 0 0 1 .4.8l-1.4 1.95l1.4 1.95a.5.5 0 0 1-.4.8h-5Zm4.75 16h2.25m3 0h2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2rbhabjm {
  width: 7.5px;
  height: 7.5px;
  x: 2.75px;
  y: 12px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="x2rbhabjm"/><path class="ewfei7nhl"/></g>`,
		"fallback": "iconoven:first-mile",
	});
}

export default Component;
