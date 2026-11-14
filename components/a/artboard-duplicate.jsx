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
		"content": `<style>.fzudqsbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h8v12h-8Zm11 0h8v12h-8Zm-11-2.75h4m7 0h4");
}
</style><path class="fzudqsbmy"/>`,
		"fallback": "uix-sharp:artboard-duplicate",
	});
}

export default Component;
