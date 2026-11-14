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
		"content": `<style>.gxaeo6b4y {
  d: path("m2.5 20.5l7-16l4 8c2-1.25 4.75-.25 5 2c1.75 0 3 1.25 3 3s-1.25 3-3 3Z");
}

.s4pazkb-h {
  d: path("M12 17.5c.75-1.75 2.5-2.5 4.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gxaeo6b4y"/><path class="s4pazkb-h"/></g>`,
		"fallback": "uix-sharp:avalanche",
	});
}

export default Component;
