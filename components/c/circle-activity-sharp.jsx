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

.l-1ucdbni {
  d: path("M12 2C17.5228 2 22 6.4771 22 12C22 17.5228 17.5228 22 12 22C6.4771 22 2 17.5228 2 12C2 6.4771 6.4771 2 12 2Z");
}

.o9o30ubng {
  d: path("M6 12L8.5 12L10 8L14 16L15.5 12L18 12");
}
</style><g class="gp_8x1bzb"><path class="l-1ucdbni"/><path class="o9o30ubng"/></g>`,
		"fallback": "keyline-icons:circle-activity-sharp",
	});
}

export default Component;
