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
		"content": `<style>.k7-_t9i2i {
  fill: currentColor;
  d: path("M5.5 2a1 1 0 0 0 0 2h13a1 1 0 1 0 0-2zm7.207 3.793a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L11 8.914V21a1 1 0 1 0 2 0V8.914l3.293 3.293a1 1 0 0 0 1.414-1.414z");
}
</style><path class="k7-_t9i2i"/>`,
		"fallback": "fluent:arrow-upload-24-filled",
	});
}

export default Component;
