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
		"content": `<style>.nonyezbbm {
  d: path("m13.79 5.21l-.58.58l-.71.71l.4.92l1.95 4.41l.4.92l.71-.71l4.08-4.08l.71-.71l-.92-.4l-4.41-1.95l-.92-.4z");
}

.vj2kgkiaz {
  d: path("M8.75 21L5.5 13.75l8-8.25M4.25 21h9");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nonyezbbm"/><path class="vj2kgkiaz"/></g>`,
		"fallback": "iconoven:desk-lamp-arm-sharp",
	});
}

export default Component;
