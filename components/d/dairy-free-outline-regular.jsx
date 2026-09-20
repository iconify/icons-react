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
		"content": `<style>.c8h3t-z9z {
  d: path("M7 9v11h9V9Z");
}

.jbmfbdcwk {
  d: path("M4 21 20 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y80g12bwz {
  d: path("m7 9 4.5 -4.5L16 9");
}
</style><g class="nrj6p8qat"><path class="c8h3t-z9z"/><path class="y80g12bwz"/><path class="jbmfbdcwk"/></g>`,
		"fallback": "iconmind:dairy-free-outline-regular",
	});
}

export default Component;
