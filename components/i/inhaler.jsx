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
		"content": `<style>.p_mj_3-5s {
  d: path("M9.75 2.5h6v10h-6Zm0 2.5h6m-11 12v2");
}

.s_29g8b8l {
  d: path("M9 9v5.5H4.5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s_29g8b8l"/><path class="p_mj_3-5s"/></g>`,
		"fallback": "uix-sharp:inhaler",
	});
}

export default Component;
