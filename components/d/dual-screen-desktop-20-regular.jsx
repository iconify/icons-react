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
		"content": `<style>.shr_vgb5w {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v2h1a.5.5 0 0 1 0 1h-2v-4h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H4zm-2 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V9zm6 8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.5v8zm-1-2h.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1m-5 .5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5");
}
</style><path class="shr_vgb5w"/>`,
		"fallback": "fluent:dual-screen-desktop-20-regular",
	});
}

export default Component;
