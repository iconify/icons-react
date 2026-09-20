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
		"content": `<style>.id18h52ud {
  fill: currentColor;
  d: path("M10.25 3.5a.75.75 0 0 1 0 1.5H6.06L15 13.94V9.75a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h4.19L5 6.06v4.19a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75z");
}
</style><path class="id18h52ud"/>`,
		"fallback": "fluent:arrow-maximize-top-left-bottom-right-20-filled",
	});
}

export default Component;
