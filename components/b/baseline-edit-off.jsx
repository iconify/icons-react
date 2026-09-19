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
		"content": `<style>.fy_ootkrt {
  fill: currentColor;
  d: path("m12.126 8.125l1.937-1.937l3.747 3.747l-1.937 1.938zM20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83l3.75 3.75L20.71 7a1 1 0 0 0 0-1.37M2 5l6.63 6.63L3 17.25V21h3.75l5.63-5.62L18 21l2-2L4 3z");
}
</style><path class="fy_ootkrt"/>`,
		"fallback": "ic:baseline-edit-off",
	});
}

export default Component;
