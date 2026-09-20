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
		"content": `<style>.pyaiiwk-m {
  fill: currentColor;
  d: path("M7.5 9.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.25 3a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m.75-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}
</style><path class="pyaiiwk-m"/>`,
		"fallback": "fluent:emoji-surprise-20-regular",
	});
}

export default Component;
