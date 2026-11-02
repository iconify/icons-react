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

.i0yittbjc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 15a3 3 0 0 1-3-3V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a3 3 0 0 1-3 3m-6 5h-1c-1.476 0-2.738-1.262-2-2l1-1a2.83 2.83 0 0 1 4 0l1 1c.738.738-.524 2-2 2z");
}

.lc63f9f5z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 4h5a4 4 0 0 1 4 4v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a4 4 0 0 1 4-4Z");
}
</style><g class="ft5dv1b6b"><path class="lc63f9f5z"/><path class="i0yittbjc"/></g>`,
		"fallback": "coolicons:airplay-duotone-round",
	});
}

export default Component;
