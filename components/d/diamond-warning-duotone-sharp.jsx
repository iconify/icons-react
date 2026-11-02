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

.kf9pqxb4y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 17l-5 5L2 12L12 2l10 10Z");
}

.lnqqobbhs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 17l-5 5L2 12L12 2l10 10zm-5-8v4m0 3h.01");
}
</style><g class="ft5dv1b6b"><path class="kf9pqxb4y"/><path class="lnqqobbhs"/></g>`,
		"fallback": "coolicons:diamond-warning-duotone-sharp",
	});
}

export default Component;
