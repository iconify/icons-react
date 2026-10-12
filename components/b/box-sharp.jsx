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
		"content": `<style>.szipu2azs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6.8477L12 12M12 12L22 6.8477M12 12L12 22M12 2L22 6.8477L22 17.1523L12 22L2 17.1523L2 6.8477L12 2Z");
}
</style><path class="szipu2azs"/>`,
		"fallback": "keyline-icons:box-sharp",
	});
}

export default Component;
