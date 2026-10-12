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

.ksiibsbdf {
  width: 16.5px;
  height: 15px;
  x: 3.75px;
  y: 5.25px;
  rx: 2.5px;
}

.zyxne-bmk {
  d: path("M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5m-5 5.25h2q.5 0 .5.5v4.25q0 .5-.38.18l-.74-.61q-.38-.32-.76 0l-.74.61q-.38.32-.38-.18V13q0-.5.5-.5");
}
</style><g class="hntgybcog"><rect class="ksiibsbdf"/><path class="zyxne-bmk"/></g>`,
		"fallback": "iconoven:calendar-event",
	});
}

export default Component;
