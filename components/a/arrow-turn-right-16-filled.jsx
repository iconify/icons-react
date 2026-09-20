import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ciqx2ge2y {
  fill: currentColor;
  d: path("M8.72 1.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06l2.22-2.22H5.75c-.69 0-1.25.56-1.25 1.25v5.5a.75.75 0 0 1-1.5 0v-5.5A2.75 2.75 0 0 1 5.75 5h5.19L8.72 2.78a.75.75 0 0 1 0-1.06");
}
</style><path class="ciqx2ge2y"/>`,
		"fallback": "fluent:arrow-turn-right-16-filled",
	});
}

export default Component;
