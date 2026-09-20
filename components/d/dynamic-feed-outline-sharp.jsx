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
		"content": `<style>.sy-qzsb3v {
  fill: currentColor;
  d: path("M3.23 19.77v-7.231h1v6.23h8.232v1zM7 16V8.77h1V15h8.23v1zm3.77-3.77v-8h10v8zm1-1h8v-4h-8z");
}
</style><path class="sy-qzsb3v"/>`,
		"fallback": "material-symbols-light:dynamic-feed-outline-sharp",
	});
}

export default Component;
