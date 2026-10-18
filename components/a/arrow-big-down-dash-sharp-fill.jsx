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
		"content": `<style>.kxf0srb6m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22L20 14L16 14L16 6L8 6L8 14L4 14ZM7 2L17 2");
}
</style><path class="kxf0srb6m"/>`,
		"fallback": "keyline-icons:arrow-big-down-dash-sharp-fill",
	});
}

export default Component;
