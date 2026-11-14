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
		"content": `<style>.mzsw-jb7t {
  d: path("M8.5 4.5h-2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zqw6plnsv {
  d: path("M8.5 2.5h7v4h-7ZM12 10v5m0 3.25h.01");
}
</style><g class="ulnmmdpxh"><path class="mzsw-jb7t"/><path class="zqw6plnsv"/></g>`,
		"fallback": "uix-sharp:incident-alert",
	});
}

export default Component;
