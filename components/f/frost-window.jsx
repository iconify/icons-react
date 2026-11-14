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
		"content": `<style>.cgkoxxbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.9 19H3V3h16v9.2M11 3v16m-8-8h16m-1 4v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="cgkoxxbop"/>`,
		"fallback": "uix-sharp:frost-window",
	});
}

export default Component;
