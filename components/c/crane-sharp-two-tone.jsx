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

.rz1-4gb5g {
  stroke-opacity: 0.4;
  d: path("M2 7L3 7L21 7L22 7M8 2L8 3L8 21M4 21L5 21L11 21L12 21M4 7L4 10L4 11");
}

.zjmc15sgh {
  d: path("M19 7L19 11M17 16L17 15L17 13C17 11.8954 17.8954 11 19 11C20.1046 11 21 11.8954 21 13L21 15L21 16");
}
</style><g class="gp_8x1bzb"><path class="rz1-4gb5g"/><path class="zjmc15sgh"/></g>`,
		"fallback": "keyline-icons:crane-sharp-two-tone",
	});
}

export default Component;
