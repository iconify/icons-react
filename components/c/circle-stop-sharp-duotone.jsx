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
		"content": `<style>.em31cgbgh {
  d: path("M9 9L15 9L15 15L9 15L9 9Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tyv81fb_p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 17.937 17.937 23 12 23C6.063 23 1 17.937 1 12C1 6.063 6.063 1 12 1C17.937 1 23 6.063 23 12Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="tyv81fb_p"/><path class="em31cgbgh"/></g>`,
		"fallback": "keyline-icons:circle-stop-sharp-duotone",
	});
}

export default Component;
