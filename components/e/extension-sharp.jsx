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
		"content": `<style>.hamc7y_sm {
  fill: currentColor;
  d: path("M3 21v-5.8q1.2 0 2.1-.762T6 12.5q0-1.15-.9-1.9T3 9.8V4h5.05q.175-1.275 1.15-2.137T11.5 1q1.3 0 2.275.863T14.95 4H20v5.35q.9.45 1.45 1.3T22 12.5q0 1.025-.55 1.875T20 15.65V21z");
}
</style><path class="hamc7y_sm"/>`,
		"fallback": "material-symbols:extension-sharp",
	});
}

export default Component;
