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
		"content": `<style>.kouyg8b6l {
  d: path("M3.5 3.5h17v17h-17Z");
}

.moyh2rfov {
  fill: currentColor;
  d: path("M7.75 3.5H12v4.25H7.75Zm8.5 0h4.25v4.25h-4.25ZM3.5 7.75h4.25V12H3.5Zm8.5 0h4.25V12H12ZM7.75 12H12v4.25H7.75Zm8.5 0h4.25v4.25h-4.25ZM3.5 16.25h4.25v4.25H3.5Zm8.5 0h4.25v4.25H12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kouyg8b6l"/><path class="moyh2rfov"/></g>`,
		"fallback": "uix-sharp:chess-board",
	});
}

export default Component;
