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

.znmlft5xa {
  stroke-opacity: 0.4;
  d: path("m9 10l-5 5a1.414 1.414 0 0 0 0 2l3 3h4l4-4");
}

.zrxvzjb_u {
  d: path("m15 16l5-5a1.414 1.414 0 0 0 0-2l-4-4a1.414 1.414 0 0 0-2 0l-5 5m2 10h10M9 10l6 6");
}
</style><g class="nrj6p8qat"><path class="znmlft5xa"/><path class="zrxvzjb_u"/></g>`,
		"fallback": "coolicons:eraser-duocolor",
	});
}

export default Component;
