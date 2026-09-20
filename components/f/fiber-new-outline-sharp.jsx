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
		"content": `<style>.d-202hbrk {
  fill: currentColor;
  d: path("M1 20V4h22v16zm2-2h18V6H3zm.5-3h1.25v-3.5L7.3 15h1.2V9H7.25v3.5L4.75 9H3.5zm6 0h4v-1.25H11v-1.1h2.5V11.4H11v-1.15h2.5V9h-4zm5 0h6V9h-1.25v4.5h-1.1V10H16.9v3.5h-1.15V9H14.5zM3 18V6z");
}
</style><path class="d-202hbrk"/>`,
		"fallback": "material-symbols:fiber-new-outline-sharp",
	});
}

export default Component;
