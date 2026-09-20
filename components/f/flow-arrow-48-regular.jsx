import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ow3a8mmpp {
  fill: currentColor;
  d: path("M9.999 4.5A6 6 0 0 1 15.81 9h17.94a8.25 8.25 0 1 1 0 16.5h-19.5a5.75 5.75 0 0 0 0 11.5h23.482l-4.366-4.366a1.25 1.25 0 0 1 1.768-1.768l6.5 6.5a1.25 1.25 0 0 1 0 1.768l-6.5 6.5a1.25 1.25 0 0 1-1.768-1.768l4.366-4.366H14.25a8.25 8.25 0 0 1 0-16.5h19.5a5.75 5.75 0 0 0 0-11.5H15.914A6 6 0 1 1 10 4.5M10 7a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7");
}
</style><path class="ow3a8mmpp"/>`,
		"fallback": "fluent:flow-arrow-48-regular",
	});
}

export default Component;
