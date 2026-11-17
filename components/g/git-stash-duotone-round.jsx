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

.me-w9sbjb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 8a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 8");
}

.zzwcggc4d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-7 8v3a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3m-9-6v7m-3-3l3 3l3-3");
}
</style><g class="ft5dv1b6b"><path class="me-w9sbjb"/><path class="zzwcggc4d"/></g>`,
		"fallback": "coolicons:git-stash-duotone-round",
	});
}

export default Component;
