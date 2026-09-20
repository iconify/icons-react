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
		"content": `<style>.olyzenbuw {
  fill: currentColor;
  d: path("M4 18q-.825 0-1.412-.587T2 16V4.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-5.3-5.3zm18 1.125L18.875 16H20V4H6.875l-2-2H20q.825 0 1.413.588T22 4zM4 16h9.175l-2-2H6v-2h3.175l-1-1H6V9h.175L4 6.825zm12.875-2l-2-2H18v2zm-3-3l-2-2H18v2zm-3-3l-2-2H18v2zm2 2");
}
</style><path class="olyzenbuw"/>`,
		"fallback": "material-symbols:comments-disabled-outline",
	});
}

export default Component;
