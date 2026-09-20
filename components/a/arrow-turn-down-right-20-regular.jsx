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
		"content": `<style>.yn1plibrk {
  fill: currentColor;
  d: path("M11.146 16.854a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L14.293 12H8a2 2 0 0 1-2-2V3.5a.5.5 0 0 0-1 0V10a3 3 0 0 0 3 3h6.293l-3.147 3.146a.5.5 0 0 0 0 .708");
}
</style><path class="yn1plibrk"/>`,
		"fallback": "fluent:arrow-turn-down-right-20-regular",
	});
}

export default Component;
