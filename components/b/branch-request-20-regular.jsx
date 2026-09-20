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
		"content": `<style>.n8g69crvf {
  fill: currentColor;
  d: path("M5.5 7.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0zM5 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m2 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4.146-8.146a.5.5 0 0 0 .708-.708L10.707 5H12.5A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708zM17 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="n8g69crvf"/>`,
		"fallback": "fluent:branch-request-20-regular",
	});
}

export default Component;
