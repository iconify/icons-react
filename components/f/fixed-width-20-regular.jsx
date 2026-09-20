import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f8_d8lb4d {
  fill: currentColor;
  d: path("M3.5 3a.5.5 0 0 1 .5.5V5h5.5V3.5a.5.5 0 0 1 1 0V5H16V3.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0V6h-5.5v1.5a.5.5 0 0 1-1 0V6H4v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5M3 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7.5 5H15a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5zm-1-6H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.5z");
}
</style><path class="f8_d8lb4d"/>`,
		"fallback": "fluent:fixed-width-20-regular",
	});
}

export default Component;
