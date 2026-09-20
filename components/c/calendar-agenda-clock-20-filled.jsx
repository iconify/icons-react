import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k8ztr8neg {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0-7A2.5 2.5 0 0 1 17 5.5v4.1c-.75-.383-1.6-.6-2.5-.6c-.818 0-1.593.18-2.291.5H6.5l-.09.008a.5.5 0 0 0 0 .984l.09.008h4.227A5.5 5.5 0 0 0 9.208 13H6.5l-.09.008a.5.5 0 0 0 0 .984L6.5 14h2.523a5.5 5.5 0 0 0 .578 3H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5M6.41 6.008a.5.5 0 0 0 0 .984L6.5 7h7l.09-.008a.5.5 0 0 0 0-.984L13.5 6h-7z");
}
</style><path class="k8ztr8neg"/>`,
		"fallback": "fluent:calendar-agenda-clock-20-filled",
	});
}

export default Component;
