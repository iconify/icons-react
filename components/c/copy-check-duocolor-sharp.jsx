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
		"content": `<style>.fa94ixb2z {
  d: path("M7 3h14v14H7ZM3 9v12h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ps2grmsyv {
  stroke-opacity: 0.4;
  d: path("m11 10l2 2l4-4");
}
</style><g class="nrj6p8qat"><path class="ps2grmsyv"/><path class="fa94ixb2z"/></g>`,
		"fallback": "coolicons:copy-check-duocolor-sharp",
	});
}

export default Component;
