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
		"content": `<style>.h5g4k5bxy {
  fill: currentColor;
  d: path("M17 21v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-5-.039q-3.014-.894-5.007-3.65T5 11.1V5.692l7-2.615l7 2.615V11.1q0 .166-.012.353t-.024.353q-.354-.092-.723-.141t-.752-.05q-1.4.006-2.598.603q-1.197.598-2.002 1.617l-.425-2.425q.442-.154.73-.543T13.48 10q0-.613-.434-1.047T12 8.519t-1.047.434T10.519 10q0 .479.288.867t.73.543l-.556 3.09h1.454q-.395.65-.607 1.413t-.213 1.587q0 .879.255 1.695t.734 1.559q-.166.067-.302.11t-.302.098");
}
</style><path class="h5g4k5bxy"/>`,
		"fallback": "material-symbols-light:encrypted-add",
	});
}

export default Component;
