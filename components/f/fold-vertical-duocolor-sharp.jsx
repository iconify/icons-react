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
		"content": `<style>.erpvbebac {
  d: path("m9 7l3 3l3-3m-3 3V3m3 14l-3-3l-3 3m3-3v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r_lyfv-an {
  stroke-opacity: 0.4;
  d: path("M4 12h4m8 0h4");
}
</style><g class="nrj6p8qat"><path class="r_lyfv-an"/><path class="erpvbebac"/></g>`,
		"fallback": "coolicons:fold-vertical-duocolor-sharp",
	});
}

export default Component;
