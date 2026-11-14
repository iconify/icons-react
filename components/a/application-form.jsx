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
		"content": `<style>.qh2tmnben {
  d: path("M16.5 5.75V4.5a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0dpx0b4f {
  d: path("m18.682 7.593l2.475 2.475l-7.071 7.071l-3.005.53l.53-3.005ZM6.5 6.5h7m-7 3.5h5.25M6.5 13.5H8");
}
</style><g class="ulnmmdpxh"><path class="qh2tmnben"/><path class="z0dpx0b4f"/></g>`,
		"fallback": "uix-sharp:application-form",
	});
}

export default Component;
