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
		"content": `<style>.i4rwz0bqe {
  fill: currentColor;
  d: path("M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-6 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-15 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM15 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.jvz7t0bpz {
  d: path("M6 5h8m-4 7h9M5 19h11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jvz7t0bpz"/><path class="i4rwz0bqe"/></g>`,
		"fallback": "uix-sharp:chart-dumbbell",
	});
}

export default Component;
