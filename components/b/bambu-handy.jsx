import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a34zs7joq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.1 19.01V43.5h14V24.6zm0-14.51v12.141l14 5.59V4.5zM8.9 28.99V4.5h14v18.9zm0 14.51V31.359l14-5.59V43.5z");
}
</style><path class="a34zs7joq"/>`,
		"fallback": "arcticons:bambu-handy",
	});
}

export default Component;
