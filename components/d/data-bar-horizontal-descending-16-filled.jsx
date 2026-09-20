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
		"content": `<style>.vxq6bdcxu {
  fill: currentColor;
  d: path("M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zM7 15a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zm4-7a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2");
}
</style><path class="vxq6bdcxu"/>`,
		"fallback": "fluent:data-bar-horizontal-descending-16-filled",
	});
}

export default Component;
