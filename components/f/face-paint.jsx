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
		"content": `<style>.d_a4zhb0w {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm6.25-4h.01m6.49 0h.01");
}

.ra1ubp4as {
  d: path("m15.25 11l.75 2h2l-1.5 1.5l.5 2l-1.75-1.25l-1.75 1.25l.5-2l-1.5-1.5h2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_a4zhb0w"/><path class="ra1ubp4as"/></g>`,
		"fallback": "uix-sharp:face-paint",
	});
}

export default Component;
