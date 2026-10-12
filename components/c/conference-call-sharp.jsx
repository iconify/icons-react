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
		"content": `<style>.gialz0bxd {
  d: path("M8.5 14a3.5 3 0 0 1 7 0Zm-.75 3h8.5m-8-8.25a5.25 5.25 0 0 1 7.5 0m-10-2.5a8.75 8.75 0 0 1 12.5 0");
}

.q_ew-h8wq {
  d: path("M7 14h11.75l.7 1.6l1.1 2.55l.7 1.6H2.75l.7-1.6l1.1-2.55l.7-1.6z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q_ew-h8wq"/><path class="gialz0bxd"/></g>`,
		"fallback": "iconoven:conference-call-sharp",
	});
}

export default Component;
