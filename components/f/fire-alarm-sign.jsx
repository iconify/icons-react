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
		"content": `<style>.i6natd9uh {
  d: path("M12 6.5c2.5 2.5 4 4.5 4 7.25a4 4 0 0 1-8 0c0-1.75.75-3 1.75-4c0 1.25.5 2 1.25 2.25c-.25-2 .25-4 1-5.5Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="i6natd9uh"/></g>`,
		"fallback": "uix-sharp:fire-alarm-sign",
	});
}

export default Component;
