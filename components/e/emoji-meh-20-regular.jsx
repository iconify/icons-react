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
		"content": `<style>.drhdlrl7s {
  fill: currentColor;
  d: path("M7.5 9.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-7 3.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14");
}
</style><path class="drhdlrl7s"/>`,
		"fallback": "fluent:emoji-meh-20-regular",
	});
}

export default Component;
