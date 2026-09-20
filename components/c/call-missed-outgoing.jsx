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
		"content": `<style>.nhwi2lbkc {
  fill: currentColor;
  d: path("M11.904 16.714L3.98 8.79l.708-.714l7.215 7.215l6.388-6.388H13v-1h7v7h-1V9.617z");
}
</style><path class="nhwi2lbkc"/>`,
		"fallback": "material-symbols-light:call-missed-outgoing",
	});
}

export default Component;
