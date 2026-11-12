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
		"content": `<style>.af1-7bbmy {
  stroke-opacity: 0.4;
  d: path("M3 5V3h2");
}

.mw8_iwbdm {
  d: path("M3 21v-4m0 0C3 9.268 9.268 3 17 3h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="af1-7bbmy"/><path class="mw8_iwbdm"/></g>`,
		"fallback": "coolicons:corner-radius-duocolor-sharp",
	});
}

export default Component;
