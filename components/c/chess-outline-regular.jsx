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
		"content": `<style>.it0a8bbrp {
  d: path("M14 14h3v3h-3Z");
}

.mu5pjkbqo {
  d: path("M3 3v18h18V3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rnv77s7xr {
  d: path("M7 7h3v3H7Z");
}
</style><g class="nrj6p8qat"><path class="mu5pjkbqo"/><path class="rnv77s7xr"/><path class="it0a8bbrp"/></g>`,
		"fallback": "iconmind:chess-outline-regular",
	});
}

export default Component;
