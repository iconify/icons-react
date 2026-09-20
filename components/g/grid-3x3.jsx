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
		"content": `<style>.sd1iribgt {
  fill: currentColor;
  d: path("M9 19v-4H5v-1h4v-4H5V9h4V5h1v4h4V5h1v4h4v1h-4v4h4v1h-4v4h-1v-4h-4v4zm1-5h4v-4h-4z");
}
</style><path class="sd1iribgt"/>`,
		"fallback": "material-symbols-light:grid-3x3",
	});
}

export default Component;
