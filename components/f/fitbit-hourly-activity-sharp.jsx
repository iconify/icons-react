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
		"content": `<style>.pq_qde5dl {
  fill: currentColor;
  d: path("m23 13l-4-.05V11h1.8q-.25-1.225-.775-2.313t-1.3-2.012L17 8.4L15.6 7l1.725-1.75q-1.3-1.075-2.913-1.663T11 3V1q2.5 0 4.688.938T19.5 4.513q1.625 1.637 2.563 3.825T23 13Zm-7.625.4l-2-6L10 8.225v-2.9L7.175 3.65L1.65 11h5.225l11.8 10.6l.525-4.375l-3.825-3.825ZM11.55 22h4.55l-9.975-9H1.65l9.9 9Z");
}
</style><path class="pq_qde5dl"/>`,
		"fallback": "material-symbols:fitbit-hourly-activity-sharp",
	});
}

export default Component;
