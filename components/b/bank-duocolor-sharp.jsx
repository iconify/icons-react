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
		"content": `<style>.k8k5xbcwl {
  stroke-opacity: 0.4;
  d: path("M6 11v6m4-6v6m4-6v6m4-6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.trn17c93q {
  d: path("m12 3l9 4H3zM3 21h18");
}
</style><g class="nrj6p8qat"><path class="k8k5xbcwl"/><path class="trn17c93q"/></g>`,
		"fallback": "coolicons:bank-duocolor-sharp",
	});
}

export default Component;
