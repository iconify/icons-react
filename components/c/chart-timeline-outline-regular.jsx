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
		"content": `<style>.e030h51ix {
  d: path("M10 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rdx5t34om {
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="nrj6p8qat"><path class="x26a8iq1c"/><path class="uk0rveqaj"/><path class="e030h51ix"/><path class="rdx5t34om"/></g>`,
		"fallback": "iconmind:chart-timeline-outline-regular",
	});
}

export default Component;
