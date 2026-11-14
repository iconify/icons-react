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
		"content": `<style>.cxh464dnt {
  d: path("M5 3h14v9.25h-6.75V20l-3.5-1.75l-3.75 2Zm3.5 3.5h7m-7 3h7m-.5 8h6v4h-6Z");
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
</style><g class="ulnmmdpxh"><path class="cxh464dnt"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:expense-fixed",
	});
}

export default Component;
