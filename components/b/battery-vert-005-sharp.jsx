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
		"content": `<style>.ugfs2wb9x {
  fill: currentColor;
  d: path("M9 19h6V6H9v13Zm-2 3V4h3V2h4v2h3v18H7Z");
}
</style><path class="ugfs2wb9x"/>`,
		"fallback": "material-symbols:battery-vert-005-sharp",
	});
}

export default Component;
