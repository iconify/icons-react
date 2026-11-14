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
		"content": `<style>.ja4vp7aru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18l-2.5 5.5h-13Zm2-5.5h4V15H5Zm5 0h4V15h-4Zm5 0h4V15h-4Z");
}
</style><path class="ja4vp7aru"/>`,
		"fallback": "uix-sharp:cargo-ship",
	});
}

export default Component;
