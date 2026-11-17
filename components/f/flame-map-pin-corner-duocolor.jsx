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
		"content": `<style>.a1mbuxbpb {
  stroke-opacity: 0.4;
  d: path("M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}

.jj5nqp3rt {
  d: path("M9 3c.5 2.5 2 4.5 4 6q.391.392.695.83M10 20.916A6 6 0 0 1 3 15c0-1.5.5-2.5 1-3m0 0a2 2 0 1 0 4 0c0-1.5-.5-2-1-3c-1-2-.5-4 2-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a1mbuxbpb"/><path class="jj5nqp3rt"/></g>`,
		"fallback": "coolicons:flame-map-pin-corner-duocolor",
	});
}

export default Component;
