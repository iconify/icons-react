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
		"content": `<style>.f3ul32h2e {
  d: path("M3.5 21V11a8.5 8.5 0 0 1 17 0v10M7.25 9v12m9.5-12v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uti6-bw1j {
  d: path("M12 19.5c-2 0-2.25-2-1.75-3.25s1.5-2 1.75-4.25c1.25 1.5 2.25 3 2 5c-.25 1.75-1 2.5-2 2.5");
}
</style><g class="hntgybcog"><path class="f3ul32h2e"/><path class="uti6-bw1j"/></g>`,
		"fallback": "uix:fireplace-screen",
	});
}

export default Component;
