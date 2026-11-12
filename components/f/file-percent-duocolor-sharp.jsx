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
		"content": `<style>.cesmxqb_w {
  d: path("M13 3H5v18h14V9m-6-6l6 6m-6-6v6h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yle_h8usw {
  stroke-opacity: 0.4;
  d: path("m14 13l-4 4m0-4h.01M14 17h.01");
}
</style><g class="nrj6p8qat"><path class="yle_h8usw"/><path class="cesmxqb_w"/></g>`,
		"fallback": "coolicons:file-percent-duocolor-sharp",
	});
}

export default Component;
