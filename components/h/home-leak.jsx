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
		"content": `<style>.k90jhcb0d {
  d: path("M10.5 4h3v4h-3ZM17 15s-2.25 2.5-2.25 4a2.25 2.25 0 0 0 4.5 0c0-1.5-2.25-4-2.25-4Z");
}

.o3xyavuxm {
  d: path("M2.5 6H14a3 3 0 0 1 3 3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o3xyavuxm"/><path class="k90jhcb0d"/></g>`,
		"fallback": "uix-sharp:home-leak",
	});
}

export default Component;
