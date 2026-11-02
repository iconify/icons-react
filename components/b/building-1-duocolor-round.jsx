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
		"content": `<style>.msc4dob4r {
  stroke-opacity: 0.4;
  d: path("M12 11V7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zti0o8bjl {
  d: path("M3 20h18M9 20v-4c0-1.28.36-2.36 1-3l2-2a2.83 2.83 0 0 1 4 0l2 2c.64.64 1 1.72 1 3v4");
}
</style><g class="nrj6p8qat"><path class="msc4dob4r"/><path class="zti0o8bjl"/></g>`,
		"fallback": "coolicons:building-1-duocolor-round",
	});
}

export default Component;
