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
		"content": `<style>.h3372mbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L10 3.5m3.977 14.42L7 3.5M2.5 19h11.4m-7.4 0l2-4.5l2 4.5m8-5l-.75 7.5M21.5 14l-.75 7.5m-3.75-5h5m-5.25 3.25h5");
}
</style><path class="h3372mbfe"/>`,
		"fallback": "uix-sharp:campsite-number",
	});
}

export default Component;
