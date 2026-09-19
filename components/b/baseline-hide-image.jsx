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
		"content": `<style>.z6og0z45h {
  fill: currentColor;
  d: path("M21 5c0-1.1-.9-2-2-2H5.83L21 18.17zM2.81 2.81L1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61l1.41-1.41zM6 17l3-4l2.25 3l.82-1.1l2.1 2.1z");
}
</style><path class="z6og0z45h"/>`,
		"fallback": "ic:baseline-hide-image",
	});
}

export default Component;
