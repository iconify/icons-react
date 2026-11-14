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
		"content": `<style>.h8xrxkbnm {
  d: path("M7.5 4.5h9l5 15.5h-19Z");
}

.iggzz_quh {
  d: path("M10.5 17v-5a2 2 0 0 1 2-2H15");
}

.ol-k0xutu {
  d: path("m13 8l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h8xrxkbnm"/><path class="iggzz_quh"/><path class="ol-k0xutu"/></g>`,
		"fallback": "uix-sharp:ar-navigation",
	});
}

export default Component;
