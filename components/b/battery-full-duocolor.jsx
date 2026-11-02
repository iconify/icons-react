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

.nuu21r--z {
  stroke-opacity: 0.4;
  d: path("M6 10v4m3-4v4m3-4v4m3-4v4");
}

.pp4_qpvso {
  d: path("M3 9a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm18 1v4");
}
</style><g class="nrj6p8qat"><path class="nuu21r--z"/><path class="pp4_qpvso"/></g>`,
		"fallback": "coolicons:battery-full-duocolor",
	});
}

export default Component;
