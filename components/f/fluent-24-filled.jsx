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
		"content": `<style>.lx3e4-b5q {
  fill: currentColor;
  d: path("M12.585 2.082a.75.75 0 0 0-.67 0l-6 3a.75.75 0 0 0-.415.67V17.48a.75.75 0 0 0 .351.636l6 3.77A.75.75 0 0 0 13 21.25v-6.034l5.585-2.793a.75.75 0 0 0 0-1.341l-4.658-2.33l4.658-2.329a.75.75 0 0 0 0-1.341z");
}
</style><path class="lx3e4-b5q"/>`,
		"fallback": "fluent:fluent-24-filled",
	});
}

export default Component;
