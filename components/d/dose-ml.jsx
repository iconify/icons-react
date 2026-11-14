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
		"content": `<style>.eh35vt17h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6m-3 0v4m-5.5 0h11m-9 0h7v12h-7Zm3.5 12v3m-3.5-9h7");
}
</style><path class="eh35vt17h"/>`,
		"fallback": "uix-sharp:dose-ml",
	});
}

export default Component;
