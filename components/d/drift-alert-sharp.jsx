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
		"content": `<style>.bme3g-yqi {
  d: path("M8.75 20.75c2.75 0 3-7.75 5.75-7.75s3 7.75 5.75 7.75M17.97 3.63l2.81 5.24l.47.88h-7.5l.47-.88l2.81-5.24l.47-.88zM17.5 5.5v1.25m0 1.5v.01");
}

.oxdpy1bnb {
  d: path("M2.75 20.75c2.75 0 3-7.75 5.75-7.75s3 7.75 5.75 7.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oxdpy1bnb"/><path class="bme3g-yqi"/></g>`,
		"fallback": "iconoven:drift-alert-sharp",
	});
}

export default Component;
