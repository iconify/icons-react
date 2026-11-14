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
		"content": `<style>.laruk9-cn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17L19 19.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5Zm1 0a3 3 0 0 1 6 0m3 0a3 3 0 0 1 6 0M9 5.5a3 3 0 0 1 6 0Z");
}
</style><path class="laruk9-cn"/>`,
		"fallback": "uix-sharp:fruit-pieces-pot",
	});
}

export default Component;
