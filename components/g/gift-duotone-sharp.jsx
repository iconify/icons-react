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

.xblh6fbqi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2 20V8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}

.ygrogytmf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8h18v12H3Zm9 0V6a2.55 2.55 0 1 0-3 2m3-2a2.55 2.55 0 1 1 3 2m-3 0v12m-9-6h18");
}
</style><g class="ft5dv1b6b"><path class="xblh6fbqi"/><path class="ygrogytmf"/></g>`,
		"fallback": "coolicons:gift-duotone-sharp",
	});
}

export default Component;
