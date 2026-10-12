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
		"content": `<style>.hvnib55_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 19.75V8a5.25 5.25 0 0 1 10.5 0v1.5a1.5 1.5 0 0 1-3 0V8a2.25 2.25 0 0 0-4.5 0v11.75a1.5 1.5 0 0 1-3 0m.7-14.38l2.6 1.51M13 2.75v3m4.55-.38l-2.6 1.51m-7.2 4.87l3-1.5m-3 5.75l3-1.5m-3 5.6l3-1.5");
}
</style><path class="hvnib55_e"/>`,
		"fallback": "iconoven:candy-cane",
	});
}

export default Component;
