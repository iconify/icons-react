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
		"content": `<style>.e18i-wb_a {
  d: path("M15.25 10.75v1.5h-3");
}

.nipuh34zy {
  d: path("M5.5 2.5h13v19h-13ZM3 21.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nipuh34zy"/><path class="e18i-wb_a"/></g>`,
		"fallback": "uix-sharp:door-flush",
	});
}

export default Component;
