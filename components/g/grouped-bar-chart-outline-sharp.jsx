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
		"content": `<style>.ji-ln4lds {
  fill: currentColor;
  d: path("M4 20V8h4v12zm5 0v-7h4v7zm7 0V4h4v16z");
}
</style><path class="ji-ln4lds"/>`,
		"fallback": "material-symbols:grouped-bar-chart-outline-sharp",
	});
}

export default Component;
