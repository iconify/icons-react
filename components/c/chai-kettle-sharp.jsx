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
		"content": `<style>.gio-r1tyq {
  d: path("M7.6 10.5c0-4.25 1.8-6.75 4.4-6.75s4.4 2.5 4.4 6.75m-.5 5.25l4.6-5.5");
}

.s4d4bh99z {
  d: path("M8.75 10h5.75l.25 1.23l1.75 8.79l.25 1.23H5.25l.25-1.23l1.75-8.79L7.5 10zm.5 0a2.75 2.75 0 0 1 5.5 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s4d4bh99z"/><path class="gio-r1tyq"/></g>`,
		"fallback": "iconoven:chai-kettle-sharp",
	});
}

export default Component;
