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
		"content": `<style>.u9lgkbyee {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z");
}
</style><path class="u9lgkbyee"/>`,
		"fallback": "fluent:dual-screen-group-20-regular",
	});
}

export default Component;
