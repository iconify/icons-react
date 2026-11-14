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
		"content": `<style>.exz376bfn {
  d: path("M9.5 6.5L7 9.25L9.5 12m5-5.5L17 9.25L14.5 12m.75 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.oxmej1skh {
  d: path("M14.4 21.5H4.5v-19h15v10.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oxmej1skh"/><path class="exz376bfn"/></g>`,
		"fallback": "uix-sharp:code-tour",
	});
}

export default Component;
