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
		"content": `<style>.wyf-0rbhk {
  fill: currentColor;
  d: path("M3 4a1 1 0 0 1 2 0v24a1 1 0 1 1-2 0zm7.5 1A3.5 3.5 0 0 0 7 8.5v3a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 25.5 5zM9 8.5A1.5 1.5 0 0 1 10.5 7h15A1.5 1.5 0 0 1 27 8.5v3a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 9 11.5zm1.5 8.5A3.5 3.5 0 0 0 7 20.5v3a3.5 3.5 0 0 0 3.5 3.5h9a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5zM9 20.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 9 23.5z");
}
</style><path class="wyf-0rbhk"/>`,
		"fallback": "fluent:align-left-32-regular",
	});
}

export default Component;
