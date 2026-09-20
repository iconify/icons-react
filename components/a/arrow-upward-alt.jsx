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
		"content": `<style>.q5evbibky {
  fill: currentColor;
  d: path("M11 18V8.8l-3.6 3.6L6 11l6-6l6 6l-1.4 1.4L13 8.8V18z");
}
</style><path class="q5evbibky"/>`,
		"fallback": "material-symbols:arrow-upward-alt",
	});
}

export default Component;
