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
		"content": `<style>.ac8ceco5w {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077zm6.4-6.789l2.6-2.58l2.6 2.58l.688-.688l-2.58-2.6l2.58-2.6l-.688-.689L12 9.293l-2.6-2.58l-.689.688l2.581 2.6l-2.58 2.6z");
}
</style><path class="ac8ceco5w"/>`,
		"fallback": "material-symbols-light:chat-error-sharp",
	});
}

export default Component;
