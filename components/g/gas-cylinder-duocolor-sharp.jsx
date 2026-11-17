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
		"content": `<style>.gazr9eylw {
  stroke-opacity: 0.4;
  d: path("M8 7V3h8v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oeqtyzbxb {
  d: path("M20 19H4v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4zM8 19v2h8v-2M4 13h16");
}
</style><g class="nrj6p8qat"><path class="gazr9eylw"/><path class="oeqtyzbxb"/></g>`,
		"fallback": "coolicons:gas-cylinder-duocolor-sharp",
	});
}

export default Component;
