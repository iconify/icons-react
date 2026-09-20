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
		"content": `<style>.bx8_r5blk {
  fill: currentColor;
  d: path("M4.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM9 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m3.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-8-7A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM3 6.5A1.5 1.5 0 0 1 4.5 5H7v1h1V5h4v3h1V5h2.5A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5H13v-2h-1v2H8V9H7v6H4.5A1.5 1.5 0 0 1 3 13.5z");
}
</style><path class="bx8_r5blk"/>`,
		"fallback": "fluent:gantt-chart-20-regular",
	});
}

export default Component;
