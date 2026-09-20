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
		"content": `<style>.q6-qw0ble {
  fill: currentColor;
  d: path("M3.146 8.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 5.707V12a2 2 0 0 0 2 2h6.5a.5.5 0 0 1 0 1H10a3 3 0 0 1-3-3V5.707L3.854 8.854a.5.5 0 0 1-.708 0");
}
</style><path class="q6-qw0ble"/>`,
		"fallback": "fluent:arrow-turn-left-up-20-regular",
	});
}

export default Component;
