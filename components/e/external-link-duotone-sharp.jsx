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

.nmacm7bdx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 5h14v14H5Z");
}

.w68ugx1bx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 5H5v14h14v-5M15 4h5v5m0-5l-7 7");
}
</style><g class="ft5dv1b6b"><path class="nmacm7bdx"/><path class="w68ugx1bx"/></g>`,
		"fallback": "coolicons:external-link-duotone-sharp",
	});
}

export default Component;
