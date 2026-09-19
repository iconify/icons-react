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
		"content": `<style>.c4ryhprgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.857 26.893H10.448L32.333 4.5l-8.19 16.607h13.409L15.667 43.5z");
}
</style><path class="c4ryhprgh"/>`,
		"fallback": "arcticons:blw",
	});
}

export default Component;
