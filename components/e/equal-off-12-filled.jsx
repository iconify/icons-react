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
		"content": `<style>.wi38i3baq {
  fill: currentColor;
  d: path("M1.854 1.146a.5.5 0 1 0-.708.708L2.793 3.5H2.25a.75.75 0 0 0 0 1.5h2.043l2 2H2.25a.75.75 0 0 0 0 1.5h5.543l2.353 2.354a.5.5 0 0 0 .708-.708zM9.12 7l1.217 1.216A.75.75 0 0 0 9.75 7zm-3.5-3.5L7.12 5h2.63a.75.75 0 0 0 0-1.5z");
}
</style><path class="wi38i3baq"/>`,
		"fallback": "fluent:equal-off-12-filled",
	});
}

export default Component;
