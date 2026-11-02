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

.q_a5zcbnk {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.q-g46c0tl {
  stroke-opacity: 0.4;
  d: path("M12 3v18m-9-9h18M6 6a10 10 0 0 1 0 12M18 6a10 10 0 0 0 0 12");
}
</style><g class="nrj6p8qat"><path class="q-g46c0tl"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:basketball-duocolor-sharp",
	});
}

export default Component;
