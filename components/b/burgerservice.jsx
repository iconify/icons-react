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
		"content": `<style>.nvchwbarr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.292 15.761V43.5M22.15 29.63a6.935 6.935 0 0 1 0 13.87H10.708V15.761H22.15a6.935 6.935 0 1 1 0 13.87m0 0H10.708m0-19.486h26.584M10.708 4.5v5.645M37.292 4.5v5.645M24 4.5v5.645");
}
</style><path class="nvchwbarr"/>`,
		"fallback": "arcticons:burgerservice",
	});
}

export default Component;
