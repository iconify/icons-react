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
		"content": `<style>.d3cuaxbwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 28.875H24v9.75h-9.75zm0-19.5H43.5v9.75H14.25zm-9.75 9.75h9.75v9.75H4.5zm9.75 0h19.5v9.75h-19.5z");
}
</style><path class="d3cuaxbwa"/>`,
		"fallback": "arcticons:ftxpro",
	});
}

export default Component;
