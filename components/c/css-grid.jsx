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
		"content": `<style>.m0ue06bny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.688 2.5h3.625A2.19 2.19 0 0 1 10.5 4.688v3.625A2.19 2.19 0 0 1 8.313 10.5H4.688A2.19 2.19 0 0 1 2.5 8.313V4.688A2.19 2.19 0 0 1 4.688 2.5m11 0h3.625A2.19 2.19 0 0 1 21.5 4.688v3.625a2.19 2.19 0 0 1-2.187 2.187h-3.625A2.19 2.19 0 0 1 13.5 8.313V4.688A2.19 2.19 0 0 1 15.688 2.5m-11 11h3.625a2.19 2.19 0 0 1 2.187 2.188v3.625A2.19 2.19 0 0 1 8.313 21.5H4.688A2.19 2.19 0 0 1 2.5 19.313v-3.625A2.19 2.19 0 0 1 4.688 13.5M16 13.5h-.25a1.25 1.25 0 0 0-1.25 1.25v1.5a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1 1.25 1.25v1.5a1.25 1.25 0 0 0 1.25 1.25H16m3-8h.25a1.25 1.25 0 0 1 1.25 1.25v1.5a1.25 1.25 0 0 0 1.25 1.25a1.25 1.25 0 0 0-1.25 1.25v1.5a1.25 1.25 0 0 1-1.25 1.25H19");
}
</style><path class="m0ue06bny"/>`,
		"fallback": "uix:css-grid",
	});
}

export default Component;
