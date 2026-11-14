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
		"content": `<style>.hxkrxzbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 6l.5 6a2.5 2.5 0 0 0 5 0l.5-6Zm3 8.5V21M5 21h5m3.5-15l.5 6a2.5 2.5 0 0 0 5 0l.5-6Zm3 8.5V21M14 21h5M6.25 3.25h.01M9 2.5h.01m6.24.75h.01M18 2.5h.01");
}
</style><path class="hxkrxzbme"/>`,
		"fallback": "uix-sharp:drinks-reception",
	});
}

export default Component;
