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
		"content": `<style>.od6kh8p9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.5V14m0 4.5h.01M15 4.5V14m0 4.5h.01");
}
</style><path class="od6kh8p9w"/>`,
		"fallback": "uix-sharp:alert-double",
	});
}

export default Component;
