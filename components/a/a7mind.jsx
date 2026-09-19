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
		"content": `<style>.a1us_nbwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.304 41.408l9.334-17.347H17.146");
}

.fosmfdcqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.528 16.431V31.57a4.36 4.36 0 0 0 2.181 3.778l13.11 7.569a4.36 4.36 0 0 0 4.362 0l13.11-7.57a4.36 4.36 0 0 0 2.181-3.777V16.43a4.36 4.36 0 0 0-2.18-3.778l-13.11-7.569a4.36 4.36 0 0 0-4.363 0l-13.11 7.57a4.36 4.36 0 0 0-2.18 3.777");
}
</style><path class="fosmfdcqr"/><path class="a1us_nbwa"/>`,
		"fallback": "arcticons:a7mind",
	});
}

export default Component;
