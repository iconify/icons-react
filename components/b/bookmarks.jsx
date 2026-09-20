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
		"content": `<style>.k5mekib0p {
  fill: currentColor;
  d: path("M5 21V8.462q0-.667.475-1.141t1.14-.475h7.058q.667 0 1.141.475t.475 1.14V21l-5.135-2.654zm13-3.558V4.616q0-.27-.173-.443T17.385 4H7.789V3h9.596q.666 0 1.14.475T19 4.615v12.827z");
}
</style><path class="k5mekib0p"/>`,
		"fallback": "material-symbols-light:bookmarks",
	});
}

export default Component;
