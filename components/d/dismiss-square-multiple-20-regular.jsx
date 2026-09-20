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
		"content": `<style>.nbqrdmbyl {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 3 12.5zM5.5 4A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4zm2 13a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5zM6.854 6.146a.5.5 0 1 0-.708.708L8.293 9l-2.147 2.146a.5.5 0 0 0 .708.708L9 9.707l2.146 2.147a.5.5 0 0 0 .708-.708L9.707 9l2.147-2.146a.5.5 0 0 0-.708-.708L9 8.293z");
}
</style><path class="nbqrdmbyl"/>`,
		"fallback": "fluent:dismiss-square-multiple-20-regular",
	});
}

export default Component;
