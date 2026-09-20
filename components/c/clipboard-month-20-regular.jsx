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
		"content": `<style>.g85l-p3ke {
  fill: currentColor;
  d: path("M7 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 4h1.585A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 1.415-1H14.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5");
}
</style><path class="g85l-p3ke"/>`,
		"fallback": "fluent:clipboard-month-20-regular",
	});
}

export default Component;
