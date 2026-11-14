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
		"content": `<style>.mgm6lvbwx {
  d: path("m12.5 9l4-4l4 4");
}

.n7w0nj00v {
  d: path("M3.5 19h8a5 5 0 0 0 5-5V5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n7w0nj00v"/><path class="mgm6lvbwx"/></g>`,
		"fallback": "uix-sharp:arrow-turn-up-right",
	});
}

export default Component;
