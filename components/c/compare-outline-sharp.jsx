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
		"content": `<style>.ha8lvbc5u {
  fill: currentColor;
  d: path("M10 23v-2H3V3h7V1h2v22zm-5-5h5v-6zm9 3v-9l5 6V5h-5V3h7v18z");
}
</style><path class="ha8lvbc5u"/>`,
		"fallback": "material-symbols:compare-outline-sharp",
	});
}

export default Component;
