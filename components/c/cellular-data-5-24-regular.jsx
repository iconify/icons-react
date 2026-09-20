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
		"content": `<style>.ylz0ybbit {
  fill: currentColor;
  d: path("M3 17.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0");
}
</style><path class="ylz0ybbit"/>`,
		"fallback": "fluent:cellular-data-5-24-regular",
	});
}

export default Component;
