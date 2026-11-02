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
		"content": `<style>.hl_mejm0r {
  stroke-opacity: 0.4;
  d: path("M6 4h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.teuvcactv {
  d: path("m8 16l4 4l4-4m-4 4V8");
}
</style><g class="nrj6p8qat"><path class="hl_mejm0r"/><path class="teuvcactv"/></g>`,
		"fallback": "coolicons:arrow-down-from-line-duocolor",
	});
}

export default Component;
