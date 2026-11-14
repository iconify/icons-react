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
		"content": `<style>.gizug3b6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4L17 7.25l-1.25 5.25l-13.5-3.25Zm2.75 6.25v5.25H3M3 13v5m13.5 1.25a2.5 2.5 0 0 1 3.5 0m-5.5-2a5.3 5.3 0 0 1 7.5 0");
}
</style><path class="gizug3b6i"/>`,
		"fallback": "uix-sharp:camera-security-wifi",
	});
}

export default Component;
