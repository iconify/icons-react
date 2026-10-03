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
		"content": `<style>.fks0f3imz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM10.882 6.9042L11.593 11.5685L13.5701 11.2671L12.8591 6.6028ZM14.8363 6.3014L15.5473 10.9657L17.5244 10.6643L16.8134 6Z");
}
</style><path clip-rule="evenodd" class="fks0f3imz"/>`,
		"fallback": "keyline-icons:bot-square-sharp-fill",
	});
}

export default Component;
