import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dc6c18b4s {
  fill: currentColor;
  d: path("M4.585 1.085a2 2 0 0 1 2.83 0l3.5 3.5a2 2 0 0 1 0 2.827l-3.5 3.5c-.782.78-2.049.78-2.83 0l-3.5-3.5a2 2 0 0 1 0-2.828z");
}
</style><path class="dc6c18b4s"/>`,
		"fallback": "fluent:diamond-12-filled",
	});
}

export default Component;
