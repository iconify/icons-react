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
		"content": `<style>.t3njsnb5b {
  d: path("m3 14l4.25-3l4.25-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqev3fdvv {
  d: path("M4.25 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm2.75 5L7.75 15L6 21.5M7.75 15L21 12.5");
}
</style><g class="ulnmmdpxh"><path class="xqev3fdvv"/><path class="t3njsnb5b"/></g>`,
		"fallback": "uix-sharp:front-kick",
	});
}

export default Component;
