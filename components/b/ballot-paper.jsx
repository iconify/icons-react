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
		"content": `<style>.bapngsbms {
  d: path("m8 13.5l3 3l5-5");
}

.l--fo-89b {
  d: path("M5 2.5h14v19H5ZM8.5 7h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l--fo-89b"/><path class="bapngsbms"/></g>`,
		"fallback": "uix-sharp:ballot-paper",
	});
}

export default Component;
