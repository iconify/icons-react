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
		"content": `<style>.bnjnom5xi {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x61dj8bob {
  d: path("M2.5 6h19v12h-19ZM12 6v12");
}
</style><g class="ulnmmdpxh"><path class="x61dj8bob"/><path class="bnjnom5xi"/></g>`,
		"fallback": "uix-sharp:hockey-rink",
	});
}

export default Component;
