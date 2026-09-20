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
		"content": `<style>.gvw6m0b2m {
  fill: currentColor;
  d: path("M14.5 2a.5.5 0 0 1 0 1H14v3.17c1.165.413 2 1.524 2 2.83v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9c0-1.306.835-2.414 2-2.826V3h-.5a.5.5 0 0 1 0-1zM5 12v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2zm2-5a2 2 0 0 0-2 2v2h10V9a2 2 0 0 0-1.796-1.99L13 7zm0-1h2.5V5H9a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-.5v1H13V3H7z");
}
</style><path class="gvw6m0b2m"/>`,
		"fallback": "fluent:gas-propane-20-regular",
	});
}

export default Component;
