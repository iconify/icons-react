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
		"content": `<style>.dk4np3w6b {
  fill: currentColor;
  d: path("M12 18q2.5 0 4.25-1.75T18 12t-1.75-4.25T12 6T7.75 7.75T6 12t1.75 4.25T12 18m0-2q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16m0-2.6l2.8-2.8l-1.4-1.4l-2.8 2.8zM3 21V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="dk4np3w6b"/>`,
		"fallback": "material-symbols:controller-gen-outline-sharp",
	});
}

export default Component;
