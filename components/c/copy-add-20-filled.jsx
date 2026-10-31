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
		"content": `<style>.vyp-flb6h {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M7 11a4 4 0 0 0 2 3.464v.036c0 1.234.406 2.373 1.093 3.291A3 3 0 0 1 9 18H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2zm7.5 1a.5.5 0 0 0-.5.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.5-.5M15 2a3 3 0 0 1 3 3v5.257a5.502 5.502 0 0 0-8.877 3.082A3 3 0 0 1 8 11V5a3 3 0 0 1 3-3z");
}
</style><path class="vyp-flb6h"/>`,
		"fallback": "fluent:copy-add-20-filled",
	});
}

export default Component;
