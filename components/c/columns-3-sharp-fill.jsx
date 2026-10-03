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
		"content": `<style>.d90zvjb9d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM8 4L8 20L10 20L10 4L8 4ZM14 4L14 20L16 20L16 4L14 4Z");
}
</style><path clip-rule="evenodd" class="d90zvjb9d"/>`,
		"fallback": "keyline-icons:columns-3-sharp-fill",
	});
}

export default Component;
