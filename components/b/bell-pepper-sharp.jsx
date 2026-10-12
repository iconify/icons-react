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
		"content": `<style>.a68vinbrm {
  d: path("m12 7l1.985-1.588l2.515.838c1.5.5 2 2.25 2 4.5v5c0 2.5-.5 4.5-2 5l-1.164.408L14 20c-.75.9-3.25.9-4 0l-1.336 1.158L7.5 20.75c-1.5-.5-2-2.5-2-5v-5c0-2.25.5-4 2-4.5l2.515-.838z");
}

.hoj797l-h {
  d: path("M12 7V3.875L13.75 3M9 9.75l3 1.5l3-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a68vinbrm"/><path class="hoj797l-h"/></g>`,
		"fallback": "iconoven:bell-pepper-sharp",
	});
}

export default Component;
