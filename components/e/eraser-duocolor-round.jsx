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
		"content": `<style>.jmwua5bim {
  d: path("m15 16l3-3a4.243 4.243 0 0 0-6-6l-3 3m2 10h10M9 10l6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zlh_l7b6b {
  stroke-opacity: 0.4;
  d: path("m9 10l-3 3a4.243 4.243 0 0 0 0 6l1 1h4l4-4");
}
</style><g class="nrj6p8qat"><path class="zlh_l7b6b"/><path class="jmwua5bim"/></g>`,
		"fallback": "coolicons:eraser-duocolor-round",
	});
}

export default Component;
