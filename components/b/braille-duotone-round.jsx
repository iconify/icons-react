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
		"content": `<style>.as21fya6p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m8 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-8 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}

.eimv64eou {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-7 0h.01M16 4h.01M16 20h.01");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="as21fya6p"/><path class="eimv64eou"/></g>`,
		"fallback": "coolicons:braille-duotone-round",
	});
}

export default Component;
