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
		"content": `<style>.q0f-lgkcm {
  d: path("M5 2.5h14v19H5Z");
}

.quenbx46y {
  d: path("M7.75 14h8.5L15 12.5v-3a3 3 0 0 0-6 0v3Zm3 3h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q0f-lgkcm"/><path class="quenbx46y"/></g>`,
		"fallback": "uix-sharp:amber-alert",
	});
}

export default Component;
