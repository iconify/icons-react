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
		"content": `<style>.cdhetgbmz {
  d: path("M2.75 9L12 3.25L21.25 9v12.25H2.75v-2Z");
}

.k-3qsjixy {
  d: path("M6.75 21.25v-9.5h10.5v9.5M8.75 15h6.5m-6.5 3.25h6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cdhetgbmz"/><path class="k-3qsjixy"/></g>`,
		"fallback": "iconoven:garage-remote-sharp",
	});
}

export default Component;
