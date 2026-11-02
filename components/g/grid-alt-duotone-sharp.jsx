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
		"content": `<style>.anuzodqto {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v16H4Zm0 5h16M4 15h16M9 4v16m6-16v16");
}

.ft5dv1b6b {
  fill: none;
}

.uc3mdtb8m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h16v16H4Z");
}
</style><g class="ft5dv1b6b"><path class="uc3mdtb8m"/><path class="anuzodqto"/></g>`,
		"fallback": "coolicons:grid-alt-duotone-sharp",
	});
}

export default Component;
