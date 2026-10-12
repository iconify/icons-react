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
		"content": `<style>.aufc031ya {
  d: path("M2.75 20.75V4.5H4.4V6h1.45V4.5H7.5V10h1.75V8.5h1.85V10h1.8V8.5h1.85V10h1.75V4.5h1.65V6h1.45V4.5h1.65v16.75H2.75z");
}

.euafkmfqu {
  d: path("M9.75 21.25V17.5a2.25 2.25 0 0 1 4.5 0v3.75M5.1 10v2m13.8-2v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aufc031ya"/><path class="euafkmfqu"/></g>`,
		"fallback": "iconoven:castle-sharp",
	});
}

export default Component;
