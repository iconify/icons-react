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
		"content": `<style>.jqf5aabfq {
  fill: currentColor;
  d: path("M3 20V7l4 3l5-7l5 4h4v13zm5-3l4-5.5l7 5.45V9h-2.7l-3.9-3.125l-4.95 6.95L5 11v3.6z");
}
</style><path class="jqf5aabfq"/>`,
		"fallback": "material-symbols:area-chart-outline",
	});
}

export default Component;
