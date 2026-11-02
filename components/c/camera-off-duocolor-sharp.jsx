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
		"content": `<style>.bge3twbbj {
  d: path("M19 20H3V7h3m4-3zh4l3 3h4v9");
}

.m7wsiiesq {
  stroke-opacity: 0.4;
  d: path("M10 11c-.543.543-1 1.172-1 2a3 3 0 0 0 3 3c.828 0 1.457-.457 2-1M2 3l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="m7wsiiesq"/><path class="bge3twbbj"/></g>`,
		"fallback": "coolicons:camera-off-duocolor-sharp",
	});
}

export default Component;
