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
		"content": `<style>.pm2k4y_sx {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8 9h.01m8.24.25h.01m-.76 6.5h.01");
}

.rzzo3sbnd {
  d: path("M15.5 4c3 .5 5.75 3 5.25 6.5c-.25 2.5-1.75 3.5-1.25 6c.25 3-4 4.5-7.5 3.5c-3-.75-4.5.25-7-1.5s-2.5-6-1-8.5c1.25-2 1-4.5 4.5-5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rzzo3sbnd"/><path class="pm2k4y_sx"/></g>`,
		"fallback": "uix-sharp:galaxy-irregular",
	});
}

export default Component;
