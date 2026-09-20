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
		"content": `<style>.l0l1efblm {
  fill: currentColor;
  d: path("M3 4a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 3 9h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 5 4zm0 6a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 3 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 5 10zm4.5-4.5A1.5 1.5 0 0 1 9 4h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 11 9H9a1.5 1.5 0 0 1-1.5-1.5zM9 10a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 9 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 11 10zm4.5-4.5A1.5 1.5 0 0 1 15 4h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 17 9h-2a1.5 1.5 0 0 1-1.5-1.5zM15 10a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 15 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 17 10z");
}
</style><path class="l0l1efblm"/>`,
		"fallback": "fluent:dock-row-20-filled",
	});
}

export default Component;
