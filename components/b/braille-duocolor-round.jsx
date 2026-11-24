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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rx6hxmjuz {
  stroke-opacity: 0.4;
  d: path("M8 12h.01M16 4h.01M16 20h.01");
}

.ypxmn0p_z {
  d: path("M7 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="nrj6p8qat"><path class="rx6hxmjuz"/><path class="ypxmn0p_z"/></g>`,
		"fallback": "coolicons:braille-duocolor-round",
	});
}

export default Component;
