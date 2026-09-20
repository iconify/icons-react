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
		"content": `<style>.y36f8sbpt {
  fill: currentColor;
  d: path("M5 21v-4.5h14V21zm9-13h4l-4-4zm-4.808 6.5v-1h5.616v1zm7.616 0v-1h5.615v1zm-15.231 0v-1h5.615v1zM5 11.5V3h9.5L19 7.5v4z");
}
</style><path class="y36f8sbpt"/>`,
		"fallback": "material-symbols-light:insert-page-break-sharp",
	});
}

export default Component;
