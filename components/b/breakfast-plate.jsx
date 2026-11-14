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
		"content": `<style>.bjbybxb5l {
  d: path("M8 8.5c2-.5 3.75 1 3.5 3c-.25 1.5.5 3-1 3.75S7.5 15.5 6 15s-1.75-2.5-1.25-4S6 8.75 8 8.5ZM8 12h.01m6.24-6h3v5.25h-3Zm0 7h3v5.25h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="bjbybxb5l"/></g>`,
		"fallback": "uix-sharp:breakfast-plate",
	});
}

export default Component;
