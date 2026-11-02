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
		"content": `<style>.gcbljub4e {
  fill: currentColor;
  d: path("M6.104 8.79A3.01 3.01 0 0 0 9 11h7.171a3 3 0 1 1 0 2H9a5 5 0 0 1-3-.999v3.17a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2.104-.039");
}
</style><path class="gcbljub4e"/>`,
		"fallback": "coolicons:git-merge-fill-sharp",
	});
}

export default Component;
