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
		"content": `<style>.nedp8zb0g {
  d: path("M3 11h12v5H3z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rqyts8bos {
  stroke-opacity: 0.4;
  d: path("m15 11l6-3");
}
</style><g class="nrj6p8qat"><path class="rqyts8bos"/><path class="nedp8zb0g"/></g>`,
		"fallback": "coolicons:frying-pan-duocolor-sharp",
	});
}

export default Component;
