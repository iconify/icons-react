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
		"content": `<style>.khiifybnn {
  fill: currentColor;
  d: path("M12 20q-2.077 0-3.538-1.461T7 15q0-1.961 1.303-3.374q1.303-1.412 3.197-1.59V5h1v5.037q1.92.176 3.21 1.589Q17 13.038 17 15q0 2.077-1.461 3.539T12 20m0-1q1.535 0 2.655-1.004t1.297-2.496H8.048q.177 1.492 1.297 2.496T12 19m-3.952-4.5h7.904q-.177-1.492-1.297-2.496T12 11t-2.655 1.004T8.048 14.5");
}
</style><path class="khiifybnn"/>`,
		"fallback": "material-symbols-light:agender-outline-sharp",
	});
}

export default Component;
