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
		"content": `<style>.vsx127fii {
  fill: currentColor;
  d: path("M3 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0zm13 0a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0zM13 16a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2zm1-2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm1-7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm-2 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z");
}
</style><path class="vsx127fii"/>`,
		"fallback": "fluent:align-stretch-horizontal-20-regular",
	});
}

export default Component;
