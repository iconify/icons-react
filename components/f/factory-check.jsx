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
		"content": `<style>.pa8r7vbdn {
  d: path("M6 13h3.5v6H6Zm8.75 5l2 2L21 15.75");
}

.sptvl1v9d {
  d: path("M11.8 19H2.5V9l6-4.5V9l6-4.5V9l6-4.5v7.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sptvl1v9d"/><path class="pa8r7vbdn"/></g>`,
		"fallback": "uix-sharp:factory-check",
	});
}

export default Component;
