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
		"content": `<style>.pte2_9b0q {
  fill: currentColor;
  d: path("m9.9 15.5l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4l-2.1 2.1l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1zM12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22");
}
</style><path class="pte2_9b0q"/>`,
		"fallback": "material-symbols:gpp-bad",
	});
}

export default Component;
