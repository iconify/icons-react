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
		"content": `<style>.q0v5jabpp {
  fill: currentColor;
  d: path("M4 13v-2h7.6l5-5H14V4h6v6h-2V7.4L12.4 13zm10 7v-2h2.6l-3.2-3.15l1.45-1.45L18 16.6V14h2v6z");
}
</style><path class="q0v5jabpp"/>`,
		"fallback": "material-symbols:arrow-split-outline",
	});
}

export default Component;
