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

.huzyumb5p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 15V3l12 6zm0 0v6");
}

.tmlad-7vc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18.447 8.106a.998.998 0 0 1 0 1.788l-12 6A1 1 0 0 1 5 15V3a1 1 0 0 1 1.447-.894Z");
}
</style><g class="ft5dv1b6b"><path class="tmlad-7vc"/><path class="huzyumb5p"/></g>`,
		"fallback": "coolicons:flag-triangle-duotone-sharp",
	});
}

export default Component;
