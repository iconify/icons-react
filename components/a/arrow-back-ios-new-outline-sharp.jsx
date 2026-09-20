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
		"content": `<style>.oqajplvwg {
  fill: currentColor;
  d: path("M16 21.308L6.692 12L16 2.692l1.064 1.064L8.819 12l8.244 8.244z");
}
</style><path class="oqajplvwg"/>`,
		"fallback": "material-symbols-light:arrow-back-ios-new-outline-sharp",
	});
}

export default Component;
