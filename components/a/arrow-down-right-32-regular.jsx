import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o8cmwubqa {
  fill: currentColor;
  d: path("M15 28.996a1 1 0 1 1 0-2h10.585L3.297 4.707A1 1 0 0 1 4.71 3.293L27 25.582V14.996a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1z");
}
</style><path class="o8cmwubqa"/>`,
		"fallback": "fluent:arrow-down-right-32-regular",
	});
}

export default Component;
