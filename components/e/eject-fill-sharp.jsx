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
		"content": `<style>.i1qfw6bry {
  fill: currentColor;
  d: path("m4.136 15.496l7-12a1 1 0 0 1 1.728 0l7 12A1.002 1.002 0 0 1 19 17H5a.998.998 0 0 1-.864-1.504M19 19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><path class="i1qfw6bry"/>`,
		"fallback": "coolicons:eject-fill-sharp",
	});
}

export default Component;
