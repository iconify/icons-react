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
		"content": `<style>.toscoiuso {
  d: path("m10 5.5l-2.5 5h3l-2.5 5");
}

.tyw98lblh {
  d: path("M4 2.5h10v19H4ZM14 8h2q1.5 0 1.5 1.5v7q0 2 1.75 2t1.75-2V7l-1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tyw98lblh"/><path class="toscoiuso"/></g>`,
		"fallback": "uix-sharp:ev-charging-station",
	});
}

export default Component;
