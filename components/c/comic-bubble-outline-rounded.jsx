import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wip0gym_m {
  fill: currentColor;
  d: path("m17.7 17.7l-2.15-4.175L18.075 11L16 8.925V6h-2.925L11 3.925L8.925 6H6v2.925L3.925 11L6 13.075V16h2.925L11 18.075l2.5-2.5zm3 3q-.2.2-.513.275t-.637-.1L13.9 18l-2.2 2.2q-.3.3-.7.3t-.7-.3L8.1 18H5q-.425 0-.712-.288T4 17v-3.1l-2.2-2.2q-.3-.3-.3-.7t.3-.7L4 8.1V5q0-.425.288-.712T5 4h3.1l2.2-2.2q.3-.3.7-.3t.7.3L13.9 4H17q.425 0 .713.288T18 5v3.1l2.2 2.2q.3.3.3.7t-.3.7L18 13.9l2.875 5.65q.175.325.1.637t-.275.513M11 11");
}
</style><path class="wip0gym_m"/>`,
		"fallback": "material-symbols:comic-bubble-outline-rounded",
	});
}

export default Component;
