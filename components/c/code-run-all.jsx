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
		"content": `<style>.ng3v8kb3m {
  d: path("M8.25 7L6 9.5L8.25 12m3-5l2.25 2.5l-.827.919m.577 4.081l4 3.25l-4 3.25Zm4.5 0l4 3.25l-4 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybdotmbat {
  d: path("M10.4 19H3V2.5h13.5v9.1");
}
</style><g class="ulnmmdpxh"><path class="ybdotmbat"/><path class="ng3v8kb3m"/></g>`,
		"fallback": "uix-sharp:code-run-all",
	});
}

export default Component;
