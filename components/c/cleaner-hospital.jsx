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
		"content": `<style>.da_xiz8wo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11L4 19.75c.15 1 1 1.75 2 1.75h5.5c1 0 1.85-.75 2-1.75L15 11Zm2-3.5H7A1.5 1.5 0 0 1 8.5 9v.5A1.5 1.5 0 0 1 7 11H4.5A1.5 1.5 0 0 1 3 9.5V9a1.5 1.5 0 0 1 1.5-1.5m16.5-5l-3.25 15m0 0l-2.25 4m2.25-4l-.25 4m.25-4l1.75 4m-1.75-4l3.75 3");
}
</style><path class="da_xiz8wo"/>`,
		"fallback": "uix:cleaner-hospital",
	});
}

export default Component;
