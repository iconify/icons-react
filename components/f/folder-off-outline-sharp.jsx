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
		"content": `<style>.ggzrp2b7l {
  fill: currentColor;
  d: path("m22 19.175l-2-2V8h-9.15l-2-2l-2-2H9.7l2 2H22zM20.475 23.3l-3.3-3.3H2V4h2l2 2H4v12h11.175L.7 3.5l1.4-1.4l19.8 19.8zm-6.05-11.725");
}
</style><path class="ggzrp2b7l"/>`,
		"fallback": "material-symbols:folder-off-outline-sharp",
	});
}

export default Component;
