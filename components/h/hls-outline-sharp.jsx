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
		"content": `<style>.cyfpnxbnz {
  fill: currentColor;
  d: path("M3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm7 0V9h1.5v4.5H14V15zm5.5 0v-2H17v.5h2v-1h-3.5V9h5v2H19v-.5h-2v1h3.5V15z");
}
</style><path class="cyfpnxbnz"/>`,
		"fallback": "material-symbols:hls-outline-sharp",
	});
}

export default Component;
