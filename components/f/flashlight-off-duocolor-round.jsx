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
		"content": `<style>.bd69zj4mw {
  stroke-opacity: 0.4;
  d: path("m9 9l6 6");
}

.i2mon9b0h {
  d: path("m15 9l2 2a1.414 1.414 0 0 1 0 2l-2 2c-.64.64-1.36 1-2 1h-1c-.64 0-1.36.36-2 1l-3 3a1.414 1.414 0 0 1-2 0l-1-1a1.414 1.414 0 0 1 0-2l3-3c.64-.64 1-1.36 1-2v-1c0-.64.36-1.36 1-2l2-2a1.414 1.414 0 0 1 2 0z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bd69zj4mw"/><path class="i2mon9b0h"/></g>`,
		"fallback": "coolicons:flashlight-off-duocolor-round",
	});
}

export default Component;
