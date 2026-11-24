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
		"content": `<style>.kgw43-t1y {
  d: path("M21 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4M3 9h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yv0shlb-w {
  stroke-opacity: 0.4;
  d: path("M13 16h8");
}
</style><g class="nrj6p8qat"><path class="yv0shlb-w"/><path class="kgw43-t1y"/></g>`,
		"fallback": "coolicons:credit-card-minus-corner-duocolor",
	});
}

export default Component;
