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

.kf_vmnxdo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.944 11H13v3h4.123m0 0a5.5 5.5 0 1 1-2.117-6.605l2.655-2.392A9 9 0 0 0 3 12a9 9 0 0 0 9 9a9 9 0 0 0 8.944-10");
}

.wx05m6biw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20.944 11a9 9 0 1 1-3.283-5.997l-2.655 2.392A5.499 5.499 0 1 0 17.123 14H13v-3Z");
}
</style><g class="ft5dv1b6b"><path class="wx05m6biw"/><path class="kf_vmnxdo"/></g>`,
		"fallback": "coolicons:google-duotone",
	});
}

export default Component;
