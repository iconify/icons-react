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
		"content": `<style>.b-4e0nbmo {
  d: path("M3 3h18v14H3Z");
}

.hwfbrrxqq {
  stroke-opacity: 0.4;
  d: path("m3 13l6-6l5 5l3-3l4 4M3 21h7m4 0h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hwfbrrxqq"/><path class="b-4e0nbmo"/></g>`,
		"fallback": "coolicons:gallery-duocolor-sharp",
	});
}

export default Component;
