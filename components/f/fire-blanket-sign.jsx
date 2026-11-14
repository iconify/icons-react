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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvpdeub0q {
  d: path("M6.5 5.5h11v1.75L15 9.75H6.5ZM15 9.75v-2.5h2.5m-5.5 11c-2.25 0-3.25-1.5-3.25-2.75s1.25-2 2-3c1 .75 1.25 1.5 1 2.25q1.5-.75 1.5-2.25c1.25 1 2 2 2 3.25c0 1.5-1 2.5-3.25 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="yvpdeub0q"/></g>`,
		"fallback": "uix-sharp:fire-blanket-sign",
	});
}

export default Component;
