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
		"content": `<style>.fgogzybtl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM5.4142 4L4 5.4142L18.5858 20L20 18.5858L5.4142 4Z");
}
</style><path clip-rule="evenodd" class="fgogzybtl"/>`,
		"fallback": "keyline-icons:ban-square-sharp-fill",
	});
}

export default Component;
