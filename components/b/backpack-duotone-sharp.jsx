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

.qauuh157c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 7h16v14H4Z");
}

.sxu26dfbw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7h16v14H4zm4 4h8m-6-4V3h4v4M8 21v-5h8v5");
}
</style><g class="ft5dv1b6b"><path class="qauuh157c"/><path class="sxu26dfbw"/></g>`,
		"fallback": "coolicons:backpack-duotone-sharp",
	});
}

export default Component;
