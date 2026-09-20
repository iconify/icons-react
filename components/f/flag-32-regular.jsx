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
		"content": `<style>.pujqtp9xy {
  fill: currentColor;
  d: path("M5 4.5A1.5 1.5 0 0 1 6.5 3H28a1 1 0 0 1 .8 1.6L23.25 12l5.55 7.4A1 1 0 0 1 28 21H7v7a1 1 0 1 1-2 0zM7 19h19l-4.8-6.4a1 1 0 0 1 0-1.2L26 5H7z");
}
</style><path class="pujqtp9xy"/>`,
		"fallback": "fluent:flag-32-regular",
	});
}

export default Component;
