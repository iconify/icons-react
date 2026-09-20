import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b77hewmwf {
  fill: currentColor;
  d: path("M23.5 3.5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6.914L6.914 22.5H12.5a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v5.586L21.086 5.5H15.5a1 1 0 1 1 0-2z");
}
</style><path class="b77hewmwf"/>`,
		"fallback": "fluent:arrow-maximize-28-filled",
	});
}

export default Component;
