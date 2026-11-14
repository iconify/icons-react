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
		"content": `<style>.zagz40b-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6c3 4.5 3 9.5-.5 15h13C15 15.5 15 10.5 18 6Q12 9.75 6 6Zm0 0l1-3.5M18 6l-1-3.5m-5 7.75v8.25");
}
</style><path class="zagz40b-g"/>`,
		"fallback": "uix-sharp:corset",
	});
}

export default Component;
