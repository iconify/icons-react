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
		"content": `<style>.i3ng5hoxj {
  d: path("M8.75 9h6.5v6h-6.5zM12 9v1.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4wnvv7pu {
  d: path("m11.5 2.9l.5-.177l.5.177l6 2.2l.99.35l.01 1.05v5c0 4.75-3.25 8.25-7.5 9.75c-4.25-1.5-7.5-5-7.5-9.75v-5l.01-1.05l.99-.35Z");
}
</style><g class="x2cwu0gfd"><path class="y4wnvv7pu"/><path class="i3ng5hoxj"/></g>`,
		"fallback": "iconoven:cargo-insurance-sharp",
	});
}

export default Component;
