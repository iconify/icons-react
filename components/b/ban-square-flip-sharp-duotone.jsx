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

.m_ti0xb9h {
  d: path("M19.2929 4.7071L4.7071 19.2929");
}

.weecyfpot {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 2L3 2C2.4477 2 2 2.4477 2 3L2 21C2 21.5523 2.4477 22 3 22L21 22C21.5523 22 22 21.5523 22 21L22 3C22 2.4477 21.5523 2 21 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="weecyfpot"/><path class="m_ti0xb9h"/></g>`,
		"fallback": "keyline-icons:ban-square-flip-sharp-duotone",
	});
}

export default Component;
