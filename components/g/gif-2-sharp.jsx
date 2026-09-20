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
		"content": `<style>.wutiln8-h {
  fill: currentColor;
  d: path("M3 16.5v-9h6.77v1H4v7h4.904v-3H6.712v-1h3.192v5zm9.904 0v-9h1v9zm4 0v-9h6v1h-5v3h4v1h-4v4z");
}
</style><path class="wutiln8-h"/>`,
		"fallback": "material-symbols-light:gif-2-sharp",
	});
}

export default Component;
