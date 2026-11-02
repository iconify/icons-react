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
		"content": `<style>.f5cxjlb6z {
  fill: currentColor;
  d: path("m4.672 10.781l4-6a4 4 0 0 1 6.656 0l4 6A4 4 0 0 1 16 17H8a4 4 0 0 1-3.328-6.219M19 21H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2");
}
</style><path class="f5cxjlb6z"/>`,
		"fallback": "coolicons:eject-fill-round",
	});
}

export default Component;
