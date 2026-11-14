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
		"content": `<style>.i0felcflz {
  d: path("M9 12q1.5-3.75 3 0t3 0");
}

.m0qnqtbtv {
  d: path("M5.5 5.5h13v13h-13Zm-3 3h3m-3 3.5h3m-3 3.5h3m13-7h3m-3 3.5h3m-3 3.5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m0qnqtbtv"/><path class="i0felcflz"/></g>`,
		"fallback": "uix-sharp:dac-audio",
	});
}

export default Component;
