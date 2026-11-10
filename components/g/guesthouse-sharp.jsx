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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.l2x7t_bvh {
  d: path("M3.998 2V4.8M3.998 4.8V17H19.998V3.2M22.928 3L19.998 3.2L3.998 4.8M3.998 4.8L1.098 5.09M9.998 17V14C9.998 12.9 10.894 12 11.998 12C13.103 12 13.998 12.9 13.998 14V17M8.998 21H14.998");
}

.lo2a_abmw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 9C9 9.55 8.552 10 8 10C7.448 10 7 9.55 7 9C7 8.45 7.448 8 8 8C8.552 8 9 8.45 9 9Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="l2x7t_bvh"/><path clip-rule="evenodd" class="lo2a_abmw"/></g>`,
		"fallback": "keyline-icons:guesthouse-sharp",
	});
}

export default Component;
