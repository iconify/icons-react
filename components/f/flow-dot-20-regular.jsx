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
		"content": `<style>.xphsg_xdy {
  fill: currentColor;
  d: path("M5 2.5A2 2 0 0 1 6.935 4H14a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h7.065A1.999 1.999 0 1 1 15 16.5a2 2 0 0 1-1.935-1.5H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H6.935A1.999 1.999 0 0 1 3 4.5a2 2 0 0 1 2-2");
}
</style><path class="xphsg_xdy"/>`,
		"fallback": "fluent:flow-dot-20-regular",
	});
}

export default Component;
