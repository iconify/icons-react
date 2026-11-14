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
		"content": `<style>.ox69_9b_z {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm7.25-3h4.5M16 10.75v2.5M14.25 15h-4.5M8 13.25v-2.5");
}

.pbd-xbbkt {
  d: path("M6.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm0 6a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ox69_9b_z"/><path class="pbd-xbbkt"/></g>`,
		"fallback": "uix-sharp:colour-tetradic",
	});
}

export default Component;
