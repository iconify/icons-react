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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.jjvpn5k2z {
  d: path("M7.5 5.5h9V9h-9Zm0 6.5H11v3.5H7.5Zm5.5 0h3.5v3.5H13Zm-5.5 5H11v2H7.5Zm5.5 0h3.5v2H13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="jjvpn5k2z"/></g>`,
		"fallback": "uix-sharp:basic-calculator",
	});
}

export default Component;
