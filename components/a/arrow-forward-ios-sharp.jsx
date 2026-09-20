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
		"content": `<style>.j7l7-wnnz {
  fill: currentColor;
  d: path("m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.314 12z");
}
</style><path class="j7l7-wnnz"/>`,
		"fallback": "material-symbols-light:arrow-forward-ios-sharp",
	});
}

export default Component;
