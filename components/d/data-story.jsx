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
		"content": `<style>.czqidacrf {
  d: path("M12 6.5c-2-1.5-5-2-9.5-2V18c4.5 0 7.5.5 9.5 2c2-1.5 5-2 9.5-2V4.5c-4.5 0-7.5.5-9.5 2Zm0 0V20M5.5 9l3.5.75M5.5 12.5l3.5.75");
}

.i8mwmkh-x {
  d: path("m14.5 14.5l2-3.5l2 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="czqidacrf"/><path class="i8mwmkh-x"/></g>`,
		"fallback": "uix-sharp:data-story",
	});
}

export default Component;
