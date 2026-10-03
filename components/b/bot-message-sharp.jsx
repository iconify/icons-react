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
		"content": `<style>.fwjgoxbav {
  d: path("M9.5808 18.7624L5 21L4.5686 16.353C2.915 14.8839 2 12.9769 2 11C2 6.5817 6.4772 3 12 3C17.5228 3 22 6.5817 22 11C22 15.4183 17.5228 19 12 19C11.1845 19 10.3721 18.9202 9.5808 18.7624Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x20nsk5xz {
  d: path("M10.8705 7.7535L11.5816 12.4178M14.8248 7.1507L15.5359 11.815");
}
</style><g class="gp_8x1bzb"><path class="fwjgoxbav"/><path class="x20nsk5xz"/></g>`,
		"fallback": "keyline-icons:bot-message-sharp",
	});
}

export default Component;
