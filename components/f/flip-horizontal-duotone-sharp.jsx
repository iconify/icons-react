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

.vg0cldu-e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 7l5 5l-5 5zm9-2v2m0 4v2m0 4v2m9-12l-5 5l5 5z");
}

.xp653xb9a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m3 7l5 5l-5 5Zm18 0v10l-5-5Z");
}
</style><g class="ft5dv1b6b"><path class="xp653xb9a"/><path class="vg0cldu-e"/></g>`,
		"fallback": "coolicons:flip-horizontal-duotone-sharp",
	});
}

export default Component;
