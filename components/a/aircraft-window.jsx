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
		"content": `<style>.g6vc-jbhw {
  d: path("M10 2.5h4a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w80tetq3b {
  d: path("M8.5 15H15a2 2 0 0 0-.5-3.75a2.75 2.75 0 0 0-5.25.5A1.75 1.75 0 0 0 8.5 15Z");
}
</style><g class="ulnmmdpxh"><path class="g6vc-jbhw"/><path class="w80tetq3b"/></g>`,
		"fallback": "uix-sharp:aircraft-window",
	});
}

export default Component;
