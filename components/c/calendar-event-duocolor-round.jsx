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

.uyn-ebzkm {
  stroke-opacity: 0.4;
  d: path("M8 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0");
}

.woc5lccts {
  d: path("M4 9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm4-6v2m8-2v2M4 9h16");
}
</style><g class="nrj6p8qat"><path class="uyn-ebzkm"/><path class="woc5lccts"/></g>`,
		"fallback": "coolicons:calendar-event-duocolor-round",
	});
}

export default Component;
