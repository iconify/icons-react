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
		"content": `<style>.llcwhnlol {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19.5h.01");
}

.mlt722b6y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5m-17 0v18m15.5-18v18M12 3.25v2.5m0 0c2.75 0 4.25 2.25 4.25 5.25v3.75l1 2H6.75l1-2V11c0-3 1.5-5.25 4.25-5.25");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mlt722b6y"/><path class="llcwhnlol"/></g>`,
		"fallback": "iconoven:church-bell",
	});
}

export default Component;
