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
		"content": `<style>.d68b_ebiz {
  d: path("M10.5 14.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.q2z9xve8s {
  d: path("M7 2.5h10v16.25H7Zm-2 19h14m-9.25-15h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q2z9xve8s"/><path class="d68b_ebiz"/></g>`,
		"fallback": "uix-sharp:game-console-vertical",
	});
}

export default Component;
