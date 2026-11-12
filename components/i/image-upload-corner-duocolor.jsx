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
		"content": `<style>.el2-dfzza {
  d: path("M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 17l5-5a1.414 1.414 0 0 1 2 0l1 1m3-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uvg5t9-zi {
  stroke-opacity: 0.4;
  d: path("m21 18l-3-3l-3 3m3-3v6");
}
</style><g class="nrj6p8qat"><path class="uvg5t9-zi"/><path class="el2-dfzza"/></g>`,
		"fallback": "coolicons:image-upload-corner-duocolor",
	});
}

export default Component;
