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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.s76_zbq3a {
  d: path("M3 9V7.75L10.5 3L18 7.75V9Zm0 11.5h8.8m-5.8-9V17m4.5-5.5V17m4.5-5.5v.7M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s76_zbq3a"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:court-fee",
	});
}

export default Component;
