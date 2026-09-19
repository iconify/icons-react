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
		"content": `<style>.uh7u-mb-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 18.772h13.138V31.91H5.5zM21.453 5.634H42.5v21.047H21.453zm0 23.862h8.043v12.87h-8.043z");
}
</style><path class="uh7u-mb-v"/>`,
		"fallback": "arcticons:bbc-news",
	});
}

export default Component;
