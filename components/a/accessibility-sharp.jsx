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
		"content": `<style>.cxhoxcc8c {
  fill: currentColor;
  d: path("M13.5 6.5C13.5 7.3284 12.8284 8 12 8C11.1716 8 10.5 7.3284 10.5 6.5C10.5 5.6716 11.1716 5 12 5C12.8284 5 13.5 5.6716 13.5 6.5Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.h5qftkorz {
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2C17.5228 2 22 6.4772 22 12ZM7 11L17 11M12 11L12 13M9.7236 17.5528L12 13L14.2764 17.5528");
}
</style><g class="gp_8x1bzb"><path class="h5qftkorz"/><path class="cxhoxcc8c"/></g>`,
		"fallback": "keyline-icons:accessibility-sharp",
	});
}

export default Component;
