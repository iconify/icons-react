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
		"content": `<style>.fqrc6lveb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16M9 9l1.5-5.5M15 9l-1.5-5.5M8 9h8l-1.5 9.75h-5ZM5.5 21.5h13");
}
</style><path class="fqrc6lveb"/>`,
		"fallback": "uix-sharp:bulb-planter",
	});
}

export default Component;
