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
		"content": `<style>.s5pjiub_m {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2.5-1A1.5 1.5 0 0 0 5 6.5v7A1.5 1.5 0 0 0 6.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 5z");
}
</style><path class="s5pjiub_m"/>`,
		"fallback": "fluent:checkbox-indeterminate-20-regular",
	});
}

export default Component;
