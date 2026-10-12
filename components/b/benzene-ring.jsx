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
		"content": `<style>.bxl-956gn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.3 3.5l5.41 3.13q1.3.75 1.3 2.25v6.25q0 1.5-1.3 2.25L13.3 20.5q-1.3.75-2.6 0l-5.41-3.12q-1.3-.75-1.3-2.25V8.88q0-1.5 1.3-2.25L10.7 3.5q1.3-.75 2.6 0m-.55 3.15l3.51 2.02m0 6.66l-3.51 2.02m-5.76-3.32V9.97");
}
</style><path class="bxl-956gn"/>`,
		"fallback": "iconoven:benzene-ring",
	});
}

export default Component;
