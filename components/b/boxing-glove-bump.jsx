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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr648emuv {
  d: path("M5.5 11h2a2 2 0 0 1 2 2m9-2h-2a2 2 0 0 0-2 2");
}

.yduxjmb9o {
  d: path("M5.5 6.5h3c2 0 3.5 1.75 3.5 4v3c0 2.25-1.5 4-3.5 4h-3ZM2.5 8h3v8h-3Zm16-1.5h-3c-2 0-3.5 1.75-3.5 4v3c0 2.25 1.5 4 3.5 4h3Zm0 1.5h3v8h-3Z");
}
</style><g class="ulnmmdpxh"><path class="yduxjmb9o"/><path class="wr648emuv"/></g>`,
		"fallback": "uix-sharp:boxing-glove-bump",
	});
}

export default Component;
