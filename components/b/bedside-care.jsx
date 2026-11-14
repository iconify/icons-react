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
		"content": `<style>.ldt7blbzw {
  d: path("M3 3.5v13m0-7h14v3.25H3Zm1.75-3.25h4.5V8.5h-4.5ZM16 12.75v.8m-1.75 2.7h1c.75 0 1.25.5 1.75.75h1.5c.75 0 .75 1.25 0 1.25H17");
}

.rcao-dgfj {
  d: path("M14.25 19.75H18c.5 0 .75 0 1-.25l2.5-1.75c.5-.25-.25-1.25-.75-1l-1.5 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ldt7blbzw"/><path class="rcao-dgfj"/></g>`,
		"fallback": "uix-sharp:bedside-care",
	});
}

export default Component;
