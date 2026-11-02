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
		"content": `<style>.mhampu3tz {
  d: path("M4 21v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6M3 21h18M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y8pz_j_an {
  stroke-opacity: 0.4;
  d: path("M8 8v3m4-3v3m4-3v3M8 4h.01M12 4h.01M16 4h.01");
}
</style><g class="nrj6p8qat"><path class="y8pz_j_an"/><path class="mhampu3tz"/></g>`,
		"fallback": "coolicons:cake-duocolor-round",
	});
}

export default Component;
