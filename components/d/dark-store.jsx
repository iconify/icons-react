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
		"content": `<style>.cv2dm8b1a {
  d: path("M4.5 10.5v10h2.75V15H11v5.5h.6m7.9-8.9v-1.1m-.75 3.75a3.75 3.75 0 1 0 2.5 4.5a3 3 0 0 1-2.5-4.5Z");
}

.eqoe0pbrn {
  d: path("m3 8.5l1.5-5h15l1.5 5a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eqoe0pbrn"/><path class="cv2dm8b1a"/></g>`,
		"fallback": "uix-sharp:dark-store",
	});
}

export default Component;
