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
		"content": `<style>.wyjewcbbi {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v2H4v10l2.4-8h17.1l-3 10z");
}
</style><path class="wyjewcbbi"/>`,
		"fallback": "material-symbols:folder-open-sharp",
	});
}

export default Component;
