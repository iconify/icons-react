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
		"content": `<style>.l83dnjvhq {
  d: path("M12 9.5V13l2.5 2M3 6l3-3m15 3l-3-3M6.5 18.5l-2 2m13-2l2 2");
}

.ro8z8qbcv {
  d: path("M4.5 13a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ro8z8qbcv"/><path class="l83dnjvhq"/></g>`,
		"fallback": "uix-sharp:alarm-clock",
	});
}

export default Component;
