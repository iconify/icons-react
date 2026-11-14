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
		"content": `<style>.b_eynumen {
  d: path("M19.5 14c2-2 2-5.5-.5-7.5");
}

.go3lnybpp {
  d: path("M7.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-1.75 6.25h12A1.75 1.75 0 0 1 19.5 14a1.75 1.75 0 0 1-1.75 1.75h-12A1.75 1.75 0 0 1 4 14a1.75 1.75 0 0 1 1.75-1.75m.25 3.5C4.25 17 3.5 19 3.5 21.5M16 15.75C17.75 17 18.5 19 18.5 21.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="go3lnybpp"/><path class="b_eynumen"/></g>`,
		"fallback": "uix:choke-hold",
	});
}

export default Component;
