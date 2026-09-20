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
		"content": `<style>.e91fksb6s {
  fill: currentColor;
  d: path("M17.943 5.463a.8.8 0 0 0-.161-.242l-.002-.001l-.001-.002A.75.75 0 0 0 17.25 5h-5.5a.75.75 0 0 0 0 1.5h3.69l-4.94 4.94l-1.97-1.97a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 1 0 1.06 1.06L8 11.06l1.97 1.97a.75.75 0 0 0 1.06 0l5.47-5.47v3.69a.75.75 0 0 0 1.5 0v-5.5a.8.8 0 0 0-.057-.287");
}
</style><path class="e91fksb6s"/>`,
		"fallback": "fluent:arrow-trending-20-filled",
	});
}

export default Component;
