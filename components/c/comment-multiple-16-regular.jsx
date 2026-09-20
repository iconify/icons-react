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
		"content": `<style>.n-g9wabum {
  fill: currentColor;
  d: path("M14 9.005v1.727A2 2 0 0 0 15 9V6a4 4 0 0 0-4-4H5a2 2 0 0 0-1.732 1H11a3 3 0 0 1 3 3zM3 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v.998a1 1 0 0 0 1.588.809L7.073 13H11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM2 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6.747L4 13.998V12H3a1 1 0 0 1-1-1z");
}
</style><path class="n-g9wabum"/>`,
		"fallback": "fluent:comment-multiple-16-regular",
	});
}

export default Component;
