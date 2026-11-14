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
		"content": `<style>.cm-_63brn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm9 0v18M6.25 6.75h.01M9 10.25h.01m-2.76 3.5h.01M9 17.25h.01");
}
</style><path class="cm-_63brn"/>`,
		"fallback": "uix-sharp:denoise",
	});
}

export default Component;
