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
		"content": `<style>.uqn54abzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14h4v6.5h-4ZM10 9.5h4v11h-4ZM16.5 5h4v15.5h-4Z");
}
</style><path class="uqn54abzn"/>`,
		"fallback": "uix-sharp:access-level",
	});
}

export default Component;
