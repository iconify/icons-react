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
		"content": `<style>.msnx-d8eh {
  d: path("M3 7h15v10H3Zm18 3v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nuu21r--z {
  stroke-opacity: 0.4;
  d: path("M6 10v4m3-4v4m3-4v4m3-4v4");
}
</style><g class="nrj6p8qat"><path class="nuu21r--z"/><path class="msnx-d8eh"/></g>`,
		"fallback": "coolicons:battery-full-duocolor-sharp",
	});
}

export default Component;
