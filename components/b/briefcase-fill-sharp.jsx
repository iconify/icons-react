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
		"content": `<style>.wy3nmg1fg {
  fill: currentColor;
  d: path("M7.099 7a5.003 5.003 0 0 1 9.802 0H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1ZM9.17 7h5.66a3.002 3.002 0 0 0-5.66 0");
}
</style><path class="wy3nmg1fg"/>`,
		"fallback": "coolicons:briefcase-fill-sharp",
	});
}

export default Component;
