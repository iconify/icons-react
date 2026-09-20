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
		"content": `<style>.x8g7nwb4g {
  fill: currentColor;
  d: path("M9 14a7 7 0 1 0-6.93-8H6a3 3 0 0 1 2 .764V3.5a.5.5 0 0 1 1 0V7h2.5a.5.5 0 1 1 0 1H8.828c.11.313.17.65.17 1zM0 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 0h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1");
}
</style><path class="x8g7nwb4g"/>`,
		"fallback": "fluent:clock-bill-16-filled",
	});
}

export default Component;
