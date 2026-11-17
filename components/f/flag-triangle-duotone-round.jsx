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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.hhcglbbdd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 15V7c0-1.838 2.162-2.919 4-2l4 2c1.648.824 1.648 3.176 0 4zm0 0v6");
}

.mne-xikmb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 5l4 2a2.235 2.235 0 0 1 0 4l-8 4V7c0-1.838 2.162-2.919 4-2");
}
</style><g class="ft5dv1b6b"><path class="mne-xikmb"/><path class="hhcglbbdd"/></g>`,
		"fallback": "coolicons:flag-triangle-duotone-round",
	});
}

export default Component;
