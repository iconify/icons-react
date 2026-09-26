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

.tyv81fb_p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 17.937 17.937 23 12 23C6.063 23 1 17.937 1 12C1 6.063 6.063 1 12 1C17.937 1 23 6.063 23 12Z");
  stroke: none;
}

.w3giaacrl {
  d: path("M17 7L14.5 14.5L7 17L9.5 9.5L17 7Z");
}
</style><g class="gp_8x1bzb"><path class="tyv81fb_p"/><path class="w3giaacrl"/></g>`,
		"fallback": "keyline-icons:compass-sharp-duotone",
	});
}

export default Component;
