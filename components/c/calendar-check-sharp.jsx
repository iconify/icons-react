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
		"content": `<style>.gefnw5fww {
  fill: currentColor;
  d: path("M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v8.202l-1 1v-3.586H5V20h6.566l1.018 1zm12.473.5l-2.742-2.723l.708-.708l2.028 2.029l4.058-4.057l.708.713z");
}
</style><path class="gefnw5fww"/>`,
		"fallback": "material-symbols-light:calendar-check-sharp",
	});
}

export default Component;
