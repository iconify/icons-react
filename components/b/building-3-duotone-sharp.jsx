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

.krbeoibiu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20v-6l5-5l5 5v6m-8-8V4h12v16");
}

.zemo7jb4h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15.707 13.293A1 1 0 0 1 16 14v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0Z");
}
</style><g class="ft5dv1b6b"><path class="zemo7jb4h"/><path class="krbeoibiu"/></g>`,
		"fallback": "coolicons:building-3-duotone-sharp",
	});
}

export default Component;
