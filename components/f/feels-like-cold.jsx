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
		"content": `<style>.v32gvpbrh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 14.5V5A2.25 2.25 0 0 1 9 5v9.5a3.5 3.5 0 1 1-4.5 0Zm2.25-.5v3.5m10-10v9m-4-6.75l8 4.5m-8 0l8-4.5");
}
</style><path class="v32gvpbrh"/>`,
		"fallback": "uix-sharp:feels-like-cold",
	});
}

export default Component;
