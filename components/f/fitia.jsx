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
		"content": `<style>.y4xbw4b8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.125 33.25a4.625 4.625 0 0 0 0 9.25h4.125a4.625 4.625 0 0 0 0-9.25zm0-13.875a4.625 4.625 0 0 0 0 9.25h16.5a4.625 4.625 0 0 0 0-9.25zm0-13.875a4.625 4.625 0 0 0 0 9.25h27.75a4.625 4.625 0 0 0 0-9.25z");
}
</style><path class="y4xbw4b8w"/>`,
		"fallback": "arcticons:fitia",
	});
}

export default Component;
