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
		"content": `<style>.zmr1a6boe {
  fill: currentColor;
  d: path("M15.25 29a1.25 1.25 0 0 1 0-2.5h9.482L3.366 5.134a1.25 1.25 0 1 1 1.768-1.768L26.5 24.732V15.25a1.25 1.25 0 1 1 2.5 0v12.5c0 .69-.56 1.25-1.25 1.25z");
}
</style><path class="zmr1a6boe"/>`,
		"fallback": "fluent:arrow-down-right-32-filled",
	});
}

export default Component;
