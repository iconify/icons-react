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

.p0df1zbcw {
  stroke-opacity: 0.4;
  d: path("M2 11L20 11L20 2L2 2L2 20L11 20L11 2");
}

.ripbswb2c {
  d: path("M15.7071 15.7071L22.2929 22.2929M22.2929 15.7071L15.7071 22.2929");
}
</style><g class="gp_8x1bzb"><path class="p0df1zbcw"/><path class="ripbswb2c"/></g>`,
		"fallback": "keyline-icons:grid-2x2-x-sharp-duotone",
	});
}

export default Component;
