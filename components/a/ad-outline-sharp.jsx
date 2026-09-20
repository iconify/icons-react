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
		"content": `<style>.x4xovguxz {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V8.154H5z");
}
</style><path class="x4xovguxz"/>`,
		"fallback": "material-symbols-light:ad-outline-sharp",
	});
}

export default Component;
