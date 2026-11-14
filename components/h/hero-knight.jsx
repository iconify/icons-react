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
		"content": `<style>.h6ll-ccri {
  d: path("M4.5 21v-9a7.5 7.5 0 0 1 15 0v9Z");
}

.ls5yvdy-e {
  d: path("M12 4.5c0-2 3-2.5 7-1.5c-1.5 1-2 2.25-2 3.5M7.5 13h9M12 13v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h6ll-ccri"/><path class="ls5yvdy-e"/></g>`,
		"fallback": "uix-sharp:hero-knight",
	});
}

export default Component;
