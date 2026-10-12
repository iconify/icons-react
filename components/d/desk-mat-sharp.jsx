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
		"content": `<style>.hzi05wb1h {
  d: path("M13.25 8.25h5v7h-5zm2.5 0V11");
}

.jnfxmc4-h {
  d: path("M2.75 5.25h18.5v13.5H2.75zm3 5.25h5m-5 3h5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jnfxmc4-h"/><path class="hzi05wb1h"/></g>`,
		"fallback": "iconoven:desk-mat-sharp",
	});
}

export default Component;
