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
		"content": `<style>.c_wd-xbqw {
  d: path("M14.35 12.25h-3.6V20l-3.5-1.75l-3.75 2V3h14v8.2M7 6.5h7m-7 3h7m0 8.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.duporv-yi {
  d: path("M18.75 17c-.25-.5-.5-.5-.75-.5q-.75 0-.75.75c0 .5 1.5.5 1.5 1.5q0 .75-.75.75c-.5 0-.75-.25-.75-.5m.75-3.25v.75m0 3v.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c_wd-xbqw"/><path class="duporv-yi"/></g>`,
		"fallback": "uix-sharp:fee-estimate",
	});
}

export default Component;
