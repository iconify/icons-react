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

.k8qvq0krc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 11a6.5 6.5 0 0 1 12 0h1v9H5v-9Z");
}

.ltbi4eb5a {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 11v9h14v-9M5 11h14M3 14h2m14 0h2M6 11a6.5 6.5 0 0 1 12 0m-6-4V4m-2 0h4");
}
</style><g class="ft5dv1b6b"><path class="k8qvq0krc"/><path class="ltbi4eb5a"/></g>`,
		"fallback": "coolicons:cooking-pot-duotone-sharp",
	});
}

export default Component;
