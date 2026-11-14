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
		"content": `<style>.fsnfx25hs {
  d: path("M10 21.5v-3a2 2 0 0 1 4 0v3");
}

.pp7umkmgo {
  d: path("M3.5 21.5V15L9 12.5V10l3-4l3 4v2.5l5.5 2.5v6.5ZM12 2v4m-2-2.25h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pp7umkmgo"/><path class="fsnfx25hs"/></g>`,
		"fallback": "uix-sharp:chapel",
	});
}

export default Component;
