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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.skx_edbgb {
  d: path("M6 3v2c0 6 12 8 12 14v2M6 5h12M8 9h8m-8 6h8M6 19h12");
}

.ypjs-2btp {
  stroke-opacity: 0.4;
  d: path("M18 3v2c0 1.56-.81 2.84-2 4m-8 6c-1.19 1.16-2 2.44-2 4v2");
}
</style><g class="nrj6p8qat"><path class="ypjs-2btp"/><path class="skx_edbgb"/></g>`,
		"fallback": "coolicons:dna-duocolor",
	});
}

export default Component;
