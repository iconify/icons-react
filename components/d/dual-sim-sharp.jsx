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
		"content": `<style>.bunx08r3q {
  d: path("M11.75 8.75h6l1.06 1.06l1.38 1.38l1.06 1.06v9h-11V8.75z");
}

.ev38uqj0i {
  d: path("M13.75 8.75v-2.5l-3.5-3.5h-7.5v12.5h7.5m3.75-1h3.5v4H14Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bunx08r3q"/><path class="ev38uqj0i"/></g>`,
		"fallback": "iconoven:dual-sim-sharp",
	});
}

export default Component;
