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
		"content": `<style>.mz9si-a_d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3L20 3C20.5523 3 21 3.4477 21 4L21 22C21 22.5523 20.5523 23 20 23L4 23C3.4477 23 3 22.5523 3 22L3 4C3 3.4477 3.4477 3 4 3L6 3L6 2C6 1.4477 6.4477 1 7 1L17 1C17.5523 1 18 1.4477 18 2L18 3ZM8 3L8 6L16 6L16 3L8 3Z");
}
</style><path clip-rule="evenodd" class="mz9si-a_d"/>`,
		"fallback": "keyline-icons:clipboard-sharp-fill",
	});
}

export default Component;
