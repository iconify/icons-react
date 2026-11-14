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
		"content": `<style>.ogbf3cb8o {
  d: path("M3.5 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm13.75 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.s6jaxpb2n {
  d: path("M3 4h3.5v9H16l3 4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s6jaxpb2n"/><path class="ogbf3cb8o"/></g>`,
		"fallback": "uix-sharp:aisle-wheelchair",
	});
}

export default Component;
