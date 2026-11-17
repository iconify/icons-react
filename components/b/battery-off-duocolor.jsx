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
		"content": `<style>.dc4zz8uqj {
  stroke-opacity: 0.4;
  d: path("M21 10v4M2 2l20 20");
}

.f9bvvdw_v {
  d: path("M16.823 16.823c-.25.114-.53.177-.823.177H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m6 0h3a2 2 0 0 1 2 2v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dc4zz8uqj"/><path class="f9bvvdw_v"/></g>`,
		"fallback": "coolicons:battery-off-duocolor",
	});
}

export default Component;
