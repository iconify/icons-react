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
		"content": `<style>.g-h7k0thj {
  d: path("M7.5 11.25v-3.5h9M14.25 5.5l2.25 2.25L14.25 10M12 14.25v7");
}

.oli_gxb7g {
  d: path("M2.75 3.25h18.5v11H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oli_gxb7g"/><path class="g-h7k0thj"/></g>`,
		"fallback": "iconoven:direction-sign-sharp",
	});
}

export default Component;
