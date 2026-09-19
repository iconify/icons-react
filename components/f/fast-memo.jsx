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
		"content": `<style>.v0qlz5ylw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.878 6.5l-.662 2.47a3.07 3.07 0 0 0 2.965 3.863h19.122a5.865 5.865 0 0 0 5.665-4.346L42.5 6.5zM10.32 23.513L5.5 41.5h9.208l4.287-16H33.41a5.21 5.21 0 0 0 5.035-3.864l.662-2.47H15.985a5.865 5.865 0 0 0-5.665 4.348z");
}
</style><path class="v0qlz5ylw"/>`,
		"fallback": "arcticons:fast-memo",
	});
}

export default Component;
