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
		"content": `<style>.alsx4nw9m {
  fill: currentColor;
  d: path("M4 20a1.002 1.002 0 0 1-.707-1.707L9.586 12L3.293 5.707A1 1 0 0 1 4 4h9c.265 0 .52.105.707.293l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 13 20Z");
}
</style><path class="alsx4nw9m"/>`,
		"fallback": "coolicons:arrow-badge-right-fill-sharp",
	});
}

export default Component;
