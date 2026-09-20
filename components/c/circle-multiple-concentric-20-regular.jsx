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
		"content": `<style>.kuk3qzbrc {
  fill: currentColor;
  d: path("M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0m7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10");
}
</style><path class="kuk3qzbrc"/>`,
		"fallback": "fluent:circle-multiple-concentric-20-regular",
	});
}

export default Component;
