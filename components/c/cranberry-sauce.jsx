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
		"content": `<style>.i7vvsk77e {
  d: path("M3 13h18a9 6.5 0 0 1-18 0Z");
}

.ic5kemwma {
  d: path("M5.5 10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmlx1yb_y {
  d: path("M9.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="i7vvsk77e"/><path class="ic5kemwma"/><path class="vmlx1yb_y"/></g>`,
		"fallback": "uix-sharp:cranberry-sauce",
	});
}

export default Component;
