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
		"content": `<style>.og_kzkbgl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 12L23 12M7 8L7 12L4 12L4 23M20 12L20 23M20 19L4 19M4 8L5.4053 2.3787L5.5001 2L8.4999 2L8.5947 2.3787L10 8L4 8Z");
}
</style><path class="og_kzkbgl"/>`,
		"fallback": "keyline-icons:desk-sharp",
	});
}

export default Component;
