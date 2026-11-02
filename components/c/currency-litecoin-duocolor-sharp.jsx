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
		"content": `<style>.bbjcmfb_h {
  d: path("M9 5v14h10");
}

.dghz08b8n {
  stroke-opacity: 0.4;
  d: path("m5 15l4-2m0 0l4-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dghz08b8n"/><path class="bbjcmfb_h"/></g>`,
		"fallback": "coolicons:currency-litecoin-duocolor-sharp",
	});
}

export default Component;
