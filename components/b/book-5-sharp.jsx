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
		"content": `<style>.txlwuybzx {
  fill: currentColor;
  d: path("M6.75 22q-1.125 0-1.937-.763T4 19.35V5.4q0-.95.588-1.7t1.537-.95L16 .8v16l-9.475 1.9q-.225.05-.375.238T6 19.35q0 .275.225.463T6.75 20H18V4h2v18zM7 16.575l2-.4V4.225l-2 .4z");
}
</style><path class="txlwuybzx"/>`,
		"fallback": "material-symbols:book-5-sharp",
	});
}

export default Component;
