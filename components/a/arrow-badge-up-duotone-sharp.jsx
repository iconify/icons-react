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

.of_mjpwxl {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 15v5l-7-7l-7 7v-9l7-7l7 7z");
}

.pmqpc9kgf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m19 20l-7-7l-7 7v-9l7-7l7 7Z");
}
</style><g class="ft5dv1b6b"><path class="pmqpc9kgf"/><path class="of_mjpwxl"/></g>`,
		"fallback": "coolicons:arrow-badge-up-duotone-sharp",
	});
}

export default Component;
