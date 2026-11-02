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
		"content": `<style>.ck83tjbau {
  d: path("m8 7l-5 5l5 5m8 0l5-5l-5-5");
}

.mhrbcobac {
  stroke-opacity: 0.4;
  d: path("M12 9c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3c1 0 3-2 3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mhrbcobac"/><path class="ck83tjbau"/></g>`,
		"fallback": "coolicons:code-sparkle-duocolor",
	});
}

export default Component;
