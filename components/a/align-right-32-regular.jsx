import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qxynmqb1d {
  fill: currentColor;
  d: path("M29 4a1 1 0 1 0-2 0v24a1 1 0 1 0 2 0zm-7.5 1A3.5 3.5 0 0 1 25 8.5v3a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 3 11.5v-3A3.5 3.5 0 0 1 6.5 5zM23 8.5A1.5 1.5 0 0 0 21.5 7h-15A1.5 1.5 0 0 0 5 8.5v3A1.5 1.5 0 0 0 6.5 13h15a1.5 1.5 0 0 0 1.5-1.5zM21.5 17a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 9 23.5v-3a3.5 3.5 0 0 1 3.5-3.5zm1.5 3.5a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5z");
}
</style><path class="qxynmqb1d"/>`,
		"fallback": "fluent:align-right-32-regular",
	});
}

export default Component;
