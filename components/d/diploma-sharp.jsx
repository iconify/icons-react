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
		"content": `<style>.crutwodnp {
  d: path("M7.25 6.5V3.25h-2M16.75 15v3.25h2m-8.5-9.75h3.5m-3.5 3h3.5m-3.25 6.75v3L12 20l1.5 1.25v-3");
}

.k5-bexbox {
  d: path("M5.25 3.25h11.5V15h4v3.25H7.25V6.5h-4V3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k5-bexbox"/><path class="crutwodnp"/></g>`,
		"fallback": "iconoven:diploma-sharp",
	});
}

export default Component;
