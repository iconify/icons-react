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
		"content": `<style>.ofskwxt4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.8 29.3c-8.9-.8-16.2-7.8-17.5-16.6c-.3-1.8-.3-3.7 0-5.4c.2-1.4-1.4-2.3-2.5-1.6C6.3 9.7 2.1 16.9 2.5 25c.5 10.7 9 19.5 19.7 20.4c10.6.9 19.8-6 22.5-15.6c.4-1.4-1-2.6-2.3-2q-4.35 1.95-9.6 1.5");
}
</style><path class="ofskwxt4x"/>`,
		"fallback": "arcticons:dark-mode",
	});
}

export default Component;
