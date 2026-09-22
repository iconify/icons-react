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
		"content": `<style>.z0c13l3xt {
  fill: currentColor;
  d: path("M11 22v-8h11v8zm2-2h7v-4h-7zm-7-9h12V9H6zm0-3h12V6H6zm3 10H6l-4 4V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v8H6v2h3z");
}
</style><path class="z0c13l3xt"/>`,
		"fallback": "material-symbols:chat-display-sharp",
	});
}

export default Component;
