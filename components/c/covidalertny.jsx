import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gatpur-5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.73 8.32l-7.64 3l-2.78 6L19.2 23L8.55 26.26l.69 4.86l-4.74 3l2.2 1.38l19.67-2.19l-.37 3.36l10.41 3l6.83-6.13l.23-2.09l-8.45 2.77Z");
}
</style><path class="gatpur-5q"/>`,
		"fallback": "arcticons:covidalertny",
	});
}

export default Component;
