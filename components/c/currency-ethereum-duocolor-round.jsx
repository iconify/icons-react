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
		"content": `<style>.j8-lmv0qm {
  stroke-opacity: 0.4;
  d: path("m6 12l6 3l6-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.slrrf6ejp {
  d: path("m12 3l6 9l-6 9l-6-9z");
}
</style><g class="nrj6p8qat"><path class="j8-lmv0qm"/><path class="slrrf6ejp"/></g>`,
		"fallback": "coolicons:currency-ethereum-duocolor-round",
	});
}

export default Component;
