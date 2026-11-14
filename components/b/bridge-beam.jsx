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
		"content": `<style>.ad417fcvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v3h-19ZM6 8h3.5v6H6Zm8.5 0H18v6h-3.5ZM3 18q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ad417fcvy"/>`,
		"fallback": "uix-sharp:bridge-beam",
	});
}

export default Component;
