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
		"content": `<style>.ouv_e6gbi {
  fill: currentColor;
  d: path("M7.5 4a5.5 5.5 0 1 0 0 11h5a5.5 5.5 0 1 0 0-11zM6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6zm9 .5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="ouv_e6gbi"/>`,
		"fallback": "fluent:games-20-filled",
	});
}

export default Component;
