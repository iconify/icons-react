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
		"content": `<style>.elg56ib3q {
  stroke-opacity: 0.4;
  d: path("M10 21v-2a2 2 0 1 1 4 0v2M7 11H5a2 2 0 0 0-2 2v8m14-10h2a2 2 0 0 1 2 2v8");
}

.eyizc-bul {
  d: path("M3 21h18M7 21V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v13M10 8h.01M14 8h.01M10 12h.01M14 12h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="elg56ib3q"/><path class="eyizc-bul"/></g>`,
		"fallback": "coolicons:building-apartment-duocolor-round",
	});
}

export default Component;
