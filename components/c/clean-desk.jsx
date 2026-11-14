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
		"content": `<style>.w266ljjvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h14.5v10H3Zm-.5 13.5H14m4.5-1.75Q19 17.5 21.75 18q-2.75.5-3.25 3.25Q18 18.5 15.25 18q2.75-.5 3.25-3.25Z");
}
</style><path class="w266ljjvw"/>`,
		"fallback": "uix-sharp:clean-desk",
	});
}

export default Component;
