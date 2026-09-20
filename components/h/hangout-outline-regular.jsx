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
		"content": `<style>.d4rfzbb0c {
  d: path("M6 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q686vz2zk {
  d: path("M14 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.uj1augdau {
  d: path("M3 12v6h18v-6Z");
}
</style><g class="nrj6p8qat"><path class="uj1augdau"/><path class="d4rfzbb0c"/><path class="q686vz2zk"/></g>`,
		"fallback": "iconmind:hangout-outline-regular",
	});
}

export default Component;
