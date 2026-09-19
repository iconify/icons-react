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
		"content": `<style>.q9665u4uc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 30.82l10.27 11.07a1.9 1.9 0 0 0 1.39.61h13.66V30.82ZM17.18 5.5L6.11 15.77a1.9 1.9 0 0 0-.61 1.39v13.66h11.68ZM42.5 17.18L32.23 6.11a1.9 1.9 0 0 0-1.39-.61H17.18v11.68ZM30.82 42.5l11.07-10.27a1.9 1.9 0 0 0 .61-1.39V17.18H30.82Z");
}
</style><path class="q9665u4uc"/>`,
		"fallback": "arcticons:chase",
	});
}

export default Component;
