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
		"content": `<style>.j34c4s9al {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18m-15 0V5q0 4 6 4t6-4V3.5m-10.5 18q-2-2.25 0-4.5t0-4.5m4.5 9q-2-2.25 0-4.5t0-4.5m4.5 9q-2-2.25 0-4.5t0-4.5");
}
</style><path class="j34c4s9al"/>`,
		"fallback": "uix-sharp:heat-detector",
	});
}

export default Component;
