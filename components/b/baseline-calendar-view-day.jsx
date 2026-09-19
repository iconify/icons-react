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
		"content": `<style>.aok6bmb8m {
  fill: currentColor;
  d: path("M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z");
}
</style><path class="aok6bmb8m"/>`,
		"fallback": "ic:baseline-calendar-view-day",
	});
}

export default Component;
