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
		"content": `<style>.bink1_bip {
  d: path("M3 5h18v14H3Zm0 4h18");
}

.bjui17z2n {
  stroke-opacity: 0.4;
  d: path("M7 15h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bjui17z2n"/><path class="bink1_bip"/></g>`,
		"fallback": "coolicons:credit-card-duocolor-sharp",
	});
}

export default Component;
