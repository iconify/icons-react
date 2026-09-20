import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u7iyexbeh {
  fill: currentColor;
  d: path("M7.877 1.879a3 3 0 0 1 4.242 0l6 5.999a3 3 0 0 1 0 4.242l-6 5.999a3 3 0 0 1-4.242 0L1.878 12.12a3 3 0 0 1 0-4.242z");
}
</style><path class="u7iyexbeh"/>`,
		"fallback": "fluent:diamond-20-filled",
	});
}

export default Component;
