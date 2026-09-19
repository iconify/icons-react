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
		"content": `<style>.tor86vbuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.982 20.136a7.76 7.76 0 1 1 1.04-3.88m7.956-.001a7.76 7.76 0 1 1 1.04 3.88m-1.04-3.88l15.521-.04m-23.477.161H4.502m5.894 18.265c8.564 6.621 17.654 6.35 27.207 0");
}
</style><path class="tor86vbuu"/>`,
		"fallback": "arcticons:geeni",
	});
}

export default Component;
