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
		"content": `<style>.c6pu8ubcl {
  d: path("M2.5 2.5h19v7h-19Zm0 9.75h6v9.25h-6Zm13 0h6v9.25h-6ZM12 9.5v3m-1.5 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8ry1kbll {
  d: path("M4.5 17.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm13 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="c6pu8ubcl"/><path class="v8ry1kbll"/></g>`,
		"fallback": "uix-sharp:home-theatre",
	});
}

export default Component;
