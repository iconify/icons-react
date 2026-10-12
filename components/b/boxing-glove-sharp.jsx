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
		"content": `<style>.rb9m-2b5l {
  d: path("M5.25 10H9.5a2.25 2.25 0 0 1 0 4.5M5.75 18h10.5v3.25H5.75z");
}

.tkjuozx9u {
  d: path("M5.25 15.5v-7A5.75 5.75 0 0 1 11 2.75h2.5a5.75 5.75 0 0 1 5.75 5.75v7h-4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tkjuozx9u"/><path class="rb9m-2b5l"/></g>`,
		"fallback": "iconoven:boxing-glove-sharp",
	});
}

export default Component;
