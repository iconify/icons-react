import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w2y81m3qf {
  fill: currentColor;
  d: path("m15.692 16.308l-.713-.708l4.6-4.6l-4.6-4.6l.713-.708L21 11zM3 18v-3q0-1.864 1.318-3.182T7.5 10.5h7.464l-4.1-4.1l.713-.708L16.884 11l-5.307 5.308l-.713-.708l4.1-4.1H7.5q-1.442 0-2.471 1.029T4 15v3z");
}
</style><path class="w2y81m3qf"/>`,
		"fallback": "material-symbols-light:forward-sharp",
	});
}

export default Component;
