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
		"content": `<style>.y80307bbw {
  fill: currentColor;
  d: path("M12.5 18h3.25V6H12.5zm-4.25 0h3.25V6H8.25zM4 18h3.25V6H4zm12.75 0H20V6h-3.25zM3 19V5h18v14z");
}
</style><path class="y80307bbw"/>`,
		"fallback": "material-symbols-light:calendar-view-week-outline-sharp",
	});
}

export default Component;
