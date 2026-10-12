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
		"content": `<style>.qvqfx6bxa {
  d: path("M18.5 20.25v-11a4.75 4.75 0 0 0-9.5 0v10.5");
}

.u1xhjcsrw {
  d: path("M12.5 16.25L9 19.75l-3.5-3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qvqfx6bxa"/><path class="u1xhjcsrw"/></g>`,
		"fallback": "iconoven:arrow-u-turn-down-sharp",
	});
}

export default Component;
