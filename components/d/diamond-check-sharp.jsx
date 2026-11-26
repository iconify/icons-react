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
		"content": `<style>.zyjec0biw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2L22 12L12 22L2 12L12 2ZM8.2071 12.2071L10.5 14.5L14.7929 10.2071");
}
</style><path class="zyjec0biw"/>`,
		"fallback": "keyline-icons:diamond-check-sharp",
	});
}

export default Component;
