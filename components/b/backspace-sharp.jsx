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
		"content": `<style>.p95sd4b0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.86 10.64l3.28-4.03l1.11-1.36h13v13.5h-13l-1.11-1.36l-3.28-4.03L2.75 12zm8.39-1.14l5 5m0-5l-5 5");
}
</style><path class="p95sd4b0v"/>`,
		"fallback": "iconoven:backspace-sharp",
	});
}

export default Component;
