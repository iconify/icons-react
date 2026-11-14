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
		"content": `<style>.oagoxbjtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12v15H6ZM4.5 21h15M9 9l3-3m-2.5 7.5L15 8");
}
</style><path class="oagoxbjtv"/>`,
		"fallback": "uix-sharp:bathroom-mirror",
	});
}

export default Component;
