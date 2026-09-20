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
		"content": `<style>.titr2u2dt {
  fill: currentColor;
  d: path("M4.646 4.646a.5.5 0 0 1 .708 0L7 6.293l1.646-1.647a.5.5 0 1 1 .708.708L7.707 7l1.647 1.646a.5.5 0 1 1-.708.708L7 7.707L5.354 9.354a.5.5 0 1 1-.708-.708L6.293 7L4.646 5.354a.5.5 0 0 1 0-.708M4 2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm10-.732A2 2 0 0 1 14 5v5.5a3.5 3.5 0 0 1-3.5 3.5H5a2 2 0 0 1-1.732-1H10.5a2.5 2.5 0 0 0 2.5-2.5z");
}
</style><path class="titr2u2dt"/>`,
		"fallback": "fluent:dismiss-square-multiple-16-regular",
	});
}

export default Component;
