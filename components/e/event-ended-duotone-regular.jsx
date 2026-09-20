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
		"content": `<style>.b5ahduzpv {
  fill: currentColor;
  d: path("M3 7h18v3l-2 2 2 2v3H3v-3l2 -2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cdxhw-bno {
  d: path("M3 7h18v3l-2 2 2 2v3H3v-3l2 -2 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tbm13hb0v {
  d: path("M6 19 19 6");
}
</style><g class="nrj6p8qat"><path class="b5ahduzpv"/><path class="cdxhw-bno"/><path class="tbm13hb0v"/></g>`,
		"fallback": "iconmind:event-ended-duotone-regular",
	});
}

export default Component;
