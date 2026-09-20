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
		"content": `<style>.zq_iu57pt {
  fill: currentColor;
  d: path("M2 11V4h11v7zm0 9v-7h13v7zm15 0v-9h-2V4h7l-2 5h2zM4.75 17.25h1.5v-1.5h-1.5zm0-9h1.5v-1.5h-1.5z");
}
</style><path class="zq_iu57pt"/>`,
		"fallback": "material-symbols:dynamic-form-sharp",
	});
}

export default Component;
