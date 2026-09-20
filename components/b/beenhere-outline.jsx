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
		"content": `<style>.oc8kl7p6b {
  fill: currentColor;
  d: path("m12 23l-7.2-5.4q-.375-.275-.587-.7T4 16V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v12q0 .475-.213.9t-.587.7zm0-2.5l6-4.5V4H6v12zM10.95 15l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.1-2.1l-1.45 1.4zM12 4H6h12z");
}
</style><path class="oc8kl7p6b"/>`,
		"fallback": "material-symbols:beenhere-outline",
	});
}

export default Component;
