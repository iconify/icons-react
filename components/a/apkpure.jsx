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
		"content": `<style>.q0hj_fboi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.1 4.5L4.73 33.8l4.76 9.7l19.12-39zm24.17 28.7l-5.05 10.3l-5.05-10.3zM28.61 4.5l9.32 19l-4.76 9.7l-9.31-19zM19.05 24h9.61m-14.12 9.21h18.63");
}
</style><path class="q0hj_fboi"/>`,
		"fallback": "arcticons:apkpure",
	});
}

export default Component;
