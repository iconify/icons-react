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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qeb65ksoh {
  stroke-opacity: 0.4;
  d: path("m9 12l3 3l3-3m-3 3V3");
}

.x9vys6b8c {
  d: path("M5 7a2 2 0 0 0-2 2v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a2 2 0 0 0-2-2");
}
</style><g class="nrj6p8qat"><path class="qeb65ksoh"/><path class="x9vys6b8c"/></g>`,
		"fallback": "coolicons:import-duocolor-round",
	});
}

export default Component;
