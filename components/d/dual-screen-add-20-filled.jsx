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
		"content": `<style>.so4fakb-b {
  fill: currentColor;
  d: path("M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15zm-.5 7.5c1.33 0 2.55-.472 3.5-1.257V16a2 2 0 0 1-2 2h-5.5V9.275a5.5 5.5 0 0 0 4 1.725m-5-3.206A5.5 5.5 0 0 1 9.022 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5zM6 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="so4fakb-b"/>`,
		"fallback": "fluent:dual-screen-add-20-filled",
	});
}

export default Component;
