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
		"content": `<style>.m-9p3lrjn {
  fill: currentColor;
  d: path("M8.5 17.5h7v-1h-7zm0-4h7v-1h-7zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8h4l-4-4z");
}
</style><path class="m-9p3lrjn"/>`,
		"fallback": "material-symbols-light:description",
	});
}

export default Component;
