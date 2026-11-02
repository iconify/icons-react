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

.g09xmg-hg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 6h2a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-7c-.763 0-1.479-.48-2-1l-4-4a1.415 1.415 0 0 1 0-2l4-4c.521-.52 1.237-1 2-1Z");
}

.snccdgbzo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 6h2a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-7c-.64 0-1.36-.36-2-1l-4-4a1.414 1.414 0 0 1 0-2l4-4c.64-.64 1.36-1 2-1zm-2 4l4 4m0-4l-4 4");
}
</style><g class="ft5dv1b6b"><path class="g09xmg-hg"/><path class="snccdgbzo"/></g>`,
		"fallback": "coolicons:backspace-duotone-round",
	});
}

export default Component;
