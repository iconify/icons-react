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
		"content": `<style>.hmjb1jk_l {
  fill: currentColor;
  d: path("m6.077 17l-1.704 1.704q-.379.379-.876.174T3 18.133V4.616q0-.691.463-1.153T4.616 3h14.769q.69 0 1.153.463T21 4.616v10.769q0 .69-.462 1.153T19.385 17zM12 10.708l2.266 2.246q.14.14.343.13q.204-.009.345-.15t.14-.334t-.14-.334L12.708 10l2.246-2.266q.14-.14.13-.344q-.009-.204-.15-.344t-.334-.14t-.334.14L12 9.292L9.734 7.046q-.14-.14-.343-.13q-.204.009-.345.15t-.14.334t.14.335L11.292 10l-2.246 2.266q-.14.14-.13.343q.009.204.15.345t.334.14t.335-.14z");
}
</style><path class="hmjb1jk_l"/>`,
		"fallback": "material-symbols-light:chat-error-rounded",
	});
}

export default Component;
