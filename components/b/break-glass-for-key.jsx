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
		"content": `<style>.fmonq9bfo {
  d: path("m3 8.5l5 2l4-4l4 3.5l5-3M6.5 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h7V18");
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
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="fmonq9bfo"/></g>`,
		"fallback": "uix-sharp:break-glass-for-key",
	});
}

export default Component;
