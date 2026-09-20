import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fi9cbabmg {
  fill: currentColor;
  d: path("M9.5 2a.5.5 0 0 0-.5.5v2.6A5 5 0 0 0 5 10v1H4a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h4.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5H17a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2h-1v-1a5 5 0 0 0-5-5V4h2.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 13.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0m8.5-.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M9 9.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0m2.5-.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5");
}
</style><path class="fi9cbabmg"/>`,
		"fallback": "fluent:building-government-20-filled",
	});
}

export default Component;
