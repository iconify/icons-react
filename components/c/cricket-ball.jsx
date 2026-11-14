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

.hwnwfebij {
  d: path("M9.5 2.75q3.5 9.25 0 18.5");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.w7vm6ib0b {
  d: path("M12.5 2.5q3.5 9.5 0 19");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="hwnwfebij"/><path class="w7vm6ib0b"/></g>`,
		"fallback": "uix:cricket-ball",
	});
}

export default Component;
