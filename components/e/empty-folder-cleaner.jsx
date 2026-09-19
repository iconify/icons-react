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
		"content": `<style>.atelugguy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.196 5.5L5.632 7.987l18.024 17.907l-4.822 4.898L30.62 42.5l11.748-12.091l-11.94-11.708l-4.285 4.476z");
}
</style><path class="atelugguy"/>`,
		"fallback": "arcticons:empty-folder-cleaner",
	});
}

export default Component;
