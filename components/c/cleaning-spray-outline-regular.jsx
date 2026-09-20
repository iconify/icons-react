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
		"content": `<style>.f8ggyj7xo {
  d: path("M7 10v11h8V10Z");
}

.fn3ujkbay {
  d: path("M19 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ht122hbxe {
  d: path("M9 10V5h6v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wvj5idbgl {
  d: path("M17 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="f8ggyj7xo"/><path class="ht122hbxe"/><path class="wvj5idbgl"/><path class="fn3ujkbay"/></g>`,
		"fallback": "iconmind:cleaning-spray-outline-regular",
	});
}

export default Component;
