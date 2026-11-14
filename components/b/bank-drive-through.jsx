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
		"content": `<style>.t5a1msbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8l9-5l9 5Zm2.5 7L7 11h10l1.5 4M4 15h16v4.5H4Zm2.5 4.5v2m11-2v2M7 17.25h.01m9.99 0h.01");
}
</style><path class="t5a1msbiq"/>`,
		"fallback": "uix-sharp:bank-drive-through",
	});
}

export default Component;
