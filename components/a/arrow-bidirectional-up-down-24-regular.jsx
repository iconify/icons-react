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
		"content": `<style>.mhy7p_bbp {
  fill: currentColor;
  d: path("M11.25 5.628v12.744l-3.456-3.639a.75.75 0 0 0-1.088 1.034l4.75 5a.75.75 0 0 0 1.088 0l4.75-5a.75.75 0 0 0-1.088-1.034l-3.456 3.639V5.628l3.456 3.639a.75.75 0 1 0 1.088-1.034l-4.75-4.998a.75.75 0 0 0-1.089 0L6.706 8.233a.75.75 0 1 0 1.088 1.034z");
}
</style><path class="mhy7p_bbp"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-24-regular",
	});
}

export default Component;
