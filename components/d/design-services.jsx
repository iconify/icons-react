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
		"content": `<style>.tfoj4jbpb {
  fill: currentColor;
  d: path("m8.8 10.95l2.15-2.175l-1.4-1.425l-1.1 1.1l-1.4-1.4l1.075-1.1L7 4.825L4.825 7zm8.2 8.225L19.175 17l-1.125-1.125l-1.1 1.075l-1.4-1.4l1.075-1.1l-1.425-1.4l-2.15 2.15zm-.775-12.75l1.4 1.4l1.4-1.4L17.6 5zM7.25 21H3v-4.25l4.375-4.375L2 7l5-5l5.4 5.4l3.775-3.8q.3-.3.675-.45t.775-.15t.775.15t.675.45L20.4 4.95q.3.3.45.675T21 6.4t-.15.763t-.45.662l-3.775 3.8L22 17l-5 5l-5.375-5.375z");
}
</style><path class="tfoj4jbpb"/>`,
		"fallback": "material-symbols:design-services",
	});
}

export default Component;
