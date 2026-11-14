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
		"content": `<style>.siv_fdyat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9.5h-4A2.5 2.5 0 0 0 3 12v7a2.5 2.5 0 0 0 2.5 2.5h4Zm5 0h4A2.5 2.5 0 0 1 21 12v7a2.5 2.5 0 0 1-2.5 2.5h-4Zm-5-5h-6m2-2l-2 2l2 2m9-2h6m-2-2l2 2l-2 2");
}
</style><path class="siv_fdyat"/>`,
		"fallback": "uix-sharp:disassembly",
	});
}

export default Component;
