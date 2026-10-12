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
		"content": `<style>.lmi8ozq6o {
  d: path("M6 16.75v-5.5L8.75 8.5H19.5V14l-2.75 2.75Z");
}

.p4u_u8p5u {
  d: path("M6 11.25h10.75v5.5m0-5.5L19.5 8.5M2.75 17.75v2h18.5v-2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lmi8ozq6o"/><path class="p4u_u8p5u"/></g>`,
		"fallback": "iconoven:butter-sharp",
	});
}

export default Component;
