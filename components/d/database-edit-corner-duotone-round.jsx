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

.gh8cy_k5n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 9C5.686 9 3 7.657 3 6s2.686-3 6-3s6 1.343 6 3s-2.686 3-6 3m4 12v-3l5-5l3 3l-5 5Z");
}

.s5tyjac4n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6c0 1.657 2.686 3 6 3s6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3m0 0v10c0 1.657 2.686 3 6 3m6-13v3M3 11c0 1.657 2.686 3 6 3m4 7v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="gh8cy_k5n"/><path class="s5tyjac4n"/></g>`,
		"fallback": "coolicons:database-edit-corner-duotone-round",
	});
}

export default Component;
