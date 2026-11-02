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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.qdyw2jb_l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9c0-3.314 4.03-6 9-6s9 2.686 9 6zm0 8h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm1-4h16");
}

.tbxgiabib {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 9H3c0-3.314 4.029-6 9-6s9 2.686 9 6m0 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2h18Z");
}
</style><g class="ft5dv1b6b"><path class="tbxgiabib"/><path class="qdyw2jb_l"/></g>`,
		"fallback": "coolicons:burger-duotone",
	});
}

export default Component;
