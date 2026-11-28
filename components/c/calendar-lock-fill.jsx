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
		"content": `<style>.xu3or25yr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V9M7 11H12M8 3V7M16 3V7M15 16H20C20.5523 16 21 16.4477 21 17V20C21 20.5523 20.5523 21 20 21H15C14.4477 21 14 20.5523 14 20V17C14 16.4477 14.4477 16 15 16ZM15.5 16V14C15.5 12.8954 16.3954 12 17.5 12C18.6046 12 19.5 12.8954 19.5 14V16");
}
</style><path class="xu3or25yr"/>`,
		"fallback": "keyline-icons:calendar-lock-fill",
	});
}

export default Component;
