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

.q-xxzhbim {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h12v5H3zm12 0l6-3");
}

.z71rl4p2j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 11h12v5H3Z");
}
</style><g class="ft5dv1b6b"><path class="z71rl4p2j"/><path class="q-xxzhbim"/></g>`,
		"fallback": "coolicons:frying-pan-duotone-sharp",
	});
}

export default Component;
