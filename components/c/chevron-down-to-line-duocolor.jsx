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
		"content": `<style>.a5yxnab-z {
  d: path("m6 7l6 6l6-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nsn8ivtct {
  stroke-opacity: 0.4;
  d: path("M6 17h12");
}
</style><g class="nrj6p8qat"><path class="nsn8ivtct"/><path class="a5yxnab-z"/></g>`,
		"fallback": "coolicons:chevron-down-to-line-duocolor",
	});
}

export default Component;
