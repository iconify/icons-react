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
		"content": `<style>.ky1jaobkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21V9m14 12V9M2.5 9q9.5-5 19 0M5 12.5h14M12 7v5.5");
}
</style><path class="ky1jaobkm"/>`,
		"fallback": "uix-sharp:chinatown-gate",
	});
}

export default Component;
