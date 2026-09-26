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
		"content": `<style>.ad49i-8hk {
  d: path("M18 13L18 3M21 6L18 3L15 6M13 18L3 18M6 15L3 18L6 21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q1srdbcur {
  stroke-opacity: 0.4;
  d: path("M3 11L3 9.6667M3 5.6667C3 4.1939 4.1939 3 5.6667 3M9.6667 3L11 3");
}
</style><g class="nrj6p8qat"><path class="ad49i-8hk"/><path class="q1srdbcur"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-left-two-tone",
	});
}

export default Component;
