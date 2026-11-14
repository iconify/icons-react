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
		"content": `<style>.vgcb2k0dj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm5.809-6.343a6.75 6.75 0 0 1 4.034 4.034m0 4.618a6.75 6.75 0 0 1-4.034 4.034m-4.618 0a6.75 6.75 0 0 1-4.034-4.034m0-4.618a6.75 6.75 0 0 1 4.034-4.034m7.758-1.439a9.5 9.5 0 0 1 2.333 2.333m0 10.898a9.5 9.5 0 0 1-2.333 2.333m-10.898 0a9.5 9.5 0 0 1-2.333-2.333m0-10.898a9.5 9.5 0 0 1 2.333-2.333");
}
</style><path class="vgcb2k0dj"/>`,
		"fallback": "uix-sharp:blur-tool",
	});
}

export default Component;
