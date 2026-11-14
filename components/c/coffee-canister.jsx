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
		"content": `<style>.c6zdbzxqd {
  d: path("M8.75 10.5h6.5v7h-6.5Z");
}

.q4vjwceux {
  d: path("M4.5 3h15v4h-15ZM6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q4vjwceux"/><path class="c6zdbzxqd"/></g>`,
		"fallback": "uix-sharp:coffee-canister",
	});
}

export default Component;
