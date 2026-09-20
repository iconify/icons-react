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
		"content": `<style>.u5lgtfbzi {
  fill: currentColor;
  d: path("M4 20V4h11.577L20 8.423V20zm1-1h14V9h-4V5H5zm2.5-3h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9zM5 5v4zv14z");
}
</style><path class="u5lgtfbzi"/>`,
		"fallback": "material-symbols-light:feed-outline-sharp",
	});
}

export default Component;
