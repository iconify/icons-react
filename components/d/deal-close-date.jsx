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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.s_fuuhzob {
  d: path("M12.2 20.5H2.5V4h17v8.5M2.5 9h17m-12-6.5V6m7-3.5V6m.5 11.5h6v4h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s_fuuhzob"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:deal-close-date",
	});
}

export default Component;
