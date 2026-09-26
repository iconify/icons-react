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
		"content": `<style>.eym-d9b2y {
  stroke-opacity: 0.4;
  d: path("M1 4L15 4M3 12L23 12");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.n7sq4abaq {
  d: path("M15 20L23 20");
}
</style><g class="gp_8x1bzb"><path class="eym-d9b2y"/><path class="n7sq4abaq"/></g>`,
		"fallback": "keyline-icons:align-offset-top-sharp-two-tone",
	});
}

export default Component;
