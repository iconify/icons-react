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
		"content": `<style>.gji-64b1w {
  d: path("M9.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.nknsadzme {
  d: path("M11.5 6.5V15a4.5 4.5 0 0 1-9 0v-2.5m15.5 2V21m-2.75-2.75L18 21l2.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gji-64b1w"/><path class="nknsadzme"/></g>`,
		"fallback": "uix-sharp:deploy-hook",
	});
}

export default Component;
