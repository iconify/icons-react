import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g_weskb6e {
  fill: currentColor;
  d: path("M6 8.829v3.17c.867-.65 1.917-1 3-.999h6a3.01 3.01 0 0 0 2.896-2.21a3 3 0 1 1 2.032.064A5.01 5.01 0 0 1 15 13H9a3.01 3.01 0 0 0-2.896 2.21A3 3 0 1 1 4 15.171V8.829a3 3 0 1 1 2 0");
}
</style><path class="g_weskb6e"/>`,
		"fallback": "coolicons:git-branch-fill-round",
	});
}

export default Component;
