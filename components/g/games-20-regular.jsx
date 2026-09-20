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
		"content": `<style>.vehhl8bju {
  fill: currentColor;
  d: path("M6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6zm9 .5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M2 9.5A5.5 5.5 0 0 1 7.5 4h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 2 9.5M7.5 5a4.5 4.5 0 0 0 0 9h5a4.5 4.5 0 1 0 0-9z");
}
</style><path class="vehhl8bju"/>`,
		"fallback": "fluent:games-20-regular",
	});
}

export default Component;
