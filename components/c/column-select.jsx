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
		"content": `<style>.ju3uevlhn {
  d: path("M3 3h18v18H3Zm6 0v18m6-18v18M3 9h18M3 15h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyv665brj {
  fill: currentColor;
  d: path("M9 3h6v18H9Z");
}
</style><g class="ulnmmdpxh"><path class="ju3uevlhn"/><path class="zyv665brj"/></g>`,
		"fallback": "uix-sharp:column-select",
	});
}

export default Component;
