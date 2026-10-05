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
		"content": `<style>.iblpw-bjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 17L12.2604 17M8.1053 12L12.8633 16.6759C13.0456 16.8549 13.0456 17.1451 12.8633 17.3241L8.1053 22M22 7L11.7396 7M15.8947 12L11.1367 7.3241C10.9544 7.1451 10.9544 6.8549 11.1367 6.6759L15.8947 2");
}
</style><path class="iblpw-bjq"/>`,
		"fallback": "keyline-icons:arrow-left-right-2-fill",
	});
}

export default Component;
