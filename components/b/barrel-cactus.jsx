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
		"content": `<style>.jg-m0xb5o {
  d: path("M12 5v9.5M8.75 5c-1 3-1 6.5-.25 9.5M15.25 5c1 3 1 6.5.25 9.5M12 4.75V2.5m-5 3L5.25 3.75M17 5.5l1.75-1.75");
}

.qzlhkyh5d {
  d: path("M5 14.5C4 12 4 8 6.5 6c2-1.75 9-1.75 11 0C20 8 20 12 19 14.5Zm.5 0h13l-1 7h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qzlhkyh5d"/><path class="jg-m0xb5o"/></g>`,
		"fallback": "uix-sharp:barrel-cactus",
	});
}

export default Component;
