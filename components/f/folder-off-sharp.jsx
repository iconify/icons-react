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
		"content": `<style>.xing1zb8b {
  fill: currentColor;
  d: path("M22 19.175L6.85 4H9.7l2 2H22zM20.475 23.3l-3.3-3.3H2V4h2l2 2H3.2L.7 3.5l1.4-1.4l19.8 19.8z");
}
</style><path class="xing1zb8b"/>`,
		"fallback": "material-symbols:folder-off-sharp",
	});
}

export default Component;
