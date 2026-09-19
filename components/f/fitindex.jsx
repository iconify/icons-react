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
		"content": `<style>.gmfznxbty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.857 9.255L4.5 28.613m39 7.929L23.857 16.646V9.255L43.5 29.151zm-19.459 2.203L13.027 27.477v-7.391l11.014 11.268z");
}
</style><path class="gmfznxbty"/>`,
		"fallback": "arcticons:fitindex",
	});
}

export default Component;
