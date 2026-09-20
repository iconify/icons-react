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
		"content": `<style>.hwtfam60b {
  fill: currentColor;
  d: path("M9 3V1h6v2zm.925 11.4l-1.3-2.4H3.05q.375-3.375 2.925-5.687T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4q.8 1.05 1.275 2.213T20.95 12H16.6L14 7.25zM12 22q-3.475 0-6.025-2.312T3.05 14H7.4l2.6 4.75l4.075-7.15l1.3 2.4h5.575q-.375 3.375-2.912 5.688T12 22");
}
</style><path class="hwtfam60b"/>`,
		"fallback": "material-symbols:avg-time-sharp",
	});
}

export default Component;
