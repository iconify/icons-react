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
		"content": `<style>.syiw7rbkg {
  d: path("M4 9h16v11H4z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z81zjju8n {
  d: path("M15 14.5a3 3 0 1 1-6 0a3 3 0 1 1 6 0M6.5 9L9 3.75h6L17.5 9");
}
</style><g class="x2cwu0gfd"><path class="syiw7rbkg"/><path class="z81zjju8n"/></g>`,
		"fallback": "iconoven:camera-strap-sharp",
	});
}

export default Component;
