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
		"content": `<style>.li4_eabjd {
  d: path("M3.5 9.75H6V16H3.5Zm0 6.25h7m-3.25 0v3.5m-3 0h6m3.25-9.75H16V16h-2.5Zm0 6.25h7m-3.25 0v3.5m-3 0h6M3 7l5.5-3.5l4 2.5l7.25-3.5");
}

.misqej4xi {
  d: path("M16 2.5h3.75v3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="li4_eabjd"/><path class="misqej4xi"/></g>`,
		"fallback": "uix-sharp:absenteeism",
	});
}

export default Component;
