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
		"content": `<style>.vb-t5gadb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.775 42.781C18.477 45.971 3.8 38.464 13.586 21.786c3.416-5.822 6.709-11.722 10.51-17.286C32.43 17.15 39.83 29.077 37.013 35.384");
}
</style><path class="vb-t5gadb"/>`,
		"fallback": "arcticons:blutspende",
	});
}

export default Component;
