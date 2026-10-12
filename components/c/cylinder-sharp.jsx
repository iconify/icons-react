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
		"content": `<style>.jknmb9xkh {
  d: path("M3.5 6a8.5 3.25 0 1 0 17 0a8.5 3.25 0 1 0-17 0Z");
}

.pqqi06bzb {
  d: path("M3.5 6v12a8.5 3.25 0 0 0 17 0V6a8.5 3.25 0 0 1-17 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pqqi06bzb"/><path class="jknmb9xkh"/></g>`,
		"fallback": "iconoven:cylinder-sharp",
	});
}

export default Component;
