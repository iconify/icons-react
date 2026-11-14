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
		"content": `<style>.cdoaxw3fk {
  d: path("m8 16.5l1.25-1.25l1.25 1.25");
}

.duk1j2buq {
  d: path("M12 12.5a2.75 2.75 0 1 1-2.75 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xv_y5yg6a {
  d: path("M7 5h10a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V8.5A3.5 3.5 0 0 1 7 5m1-2v4m8-4v4M3.5 10h17");
}
</style><g class="hntgybcog"><path class="xv_y5yg6a"/><path class="duk1j2buq"/><path class="cdoaxw3fk"/></g>`,
		"fallback": "uix:calendar-repeat",
	});
}

export default Component;
