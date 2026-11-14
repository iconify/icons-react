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
		"content": `<style>.j_0sa5b2z {
  d: path("M7.25 9.5v2.25a4.75 4.75 0 1 0 3 0V9.5m-4-3h5v3h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtkg7lbxg {
  d: path("M8.75 6.5v-2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V19");
}
</style><g class="ulnmmdpxh"><path class="j_0sa5b2z"/><path class="vtkg7lbxg"/></g>`,
		"fallback": "uix-sharp:delivery-tube",
	});
}

export default Component;
