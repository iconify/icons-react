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
		"content": `<style>.l92hkn1dp {
  d: path("m3 11l9-8l9 8m-2-1.778V21H5V9.222");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zuh2np-5q {
  stroke-opacity: 0.4;
  d: path("m12 9l3 2.667V17H9v-5.333z");
}
</style><g class="nrj6p8qat"><path class="zuh2np-5q"/><path class="l92hkn1dp"/></g>`,
		"fallback": "coolicons:house-alt-4-duocolor-sharp",
	});
}

export default Component;
