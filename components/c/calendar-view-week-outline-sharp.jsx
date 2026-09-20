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
		"content": `<style>.vp9q78bzj {
  fill: currentColor;
  d: path("M13 18h2.5V6H13zm-4.5 0H11V6H8.5zM4 18h2.5V6H4zm13.5 0H20V6h-2.5zM2 20V4h20v16z");
}
</style><path class="vp9q78bzj"/>`,
		"fallback": "material-symbols:calendar-view-week-outline-sharp",
	});
}

export default Component;
