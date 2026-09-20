import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xkqojw9qx {
  fill: currentColor;
  d: path("M7 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-5 .5A4.5 4.5 0 0 1 6.5 8h17a4.5 4.5 0 0 1 4.5 4.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H28v.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 2 19.5zM6.5 10A2.5 2.5 0 0 0 4 12.5v7A2.5 2.5 0 0 0 6.5 22h17a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2.5-2.5z");
}
</style><path class="xkqojw9qx"/>`,
		"fallback": "fluent:battery-2-32-regular",
	});
}

export default Component;
