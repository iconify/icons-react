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
		"content": `<style>.ew150kbee {
  d: path("M10.151 4.494C10.6341 3.956 11.25 3.53 11.9609 3.271M16 3C17.6569 3 19 4.343 19 6V7.5M19 7.5C20.6569 7.5 22 8.843 22 10.5V12M19 7.5H17.5M2 2L22 22");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xb_qgtbwz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19 19V20.5C19 21.328 18.3284 22 17.5 22H3.5C2.1193 22 1 20.881 1 19.5V17.5C1 16.119 2.1193 15 3.5 15H15L19 19Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="xb_qgtbwz"/><path class="ew150kbee"/></g>`,
		"fallback": "keyline-icons:cigarette-off-fill",
	});
}

export default Component;
