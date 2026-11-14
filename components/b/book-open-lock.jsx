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
		"content": `<style>.dclw_e30w {
  d: path("M19 12.276V4.75c-2.5-.5-5.75 0-8 1.5c-2.25-1.5-5.5-2-8.5-1.5V18.5c3-.5 6.25 0 8.5 1.5a9 9 0 0 1 1.207-.67M11 6.25V20m4-2.5h6v4h-6Z");
}

.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dclw_e30w"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:book-open-lock",
	});
}

export default Component;
