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

.tcgl7cfwn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 12L6 5C6 4.4477 6.4477 4 7 4L11 4C15.4183 4 19 7.5817 19 12C19 16.4183 15.4183 20 11 20L7 20C6.4477 20 6 19.5523 6 19Z");
  stroke: none;
}

.tfh65f59u {
  d: path("M1 8L7 8M1 16L7 16M18 12L23 12");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="tcgl7cfwn"/><path class="tfh65f59u"/></g>`,
		"fallback": "keyline-icons:gate-and-sharp-fill",
	});
}

export default Component;
