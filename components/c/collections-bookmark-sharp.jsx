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
		"content": `<style>.l9i9of-za {
  fill: currentColor;
  d: path("M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1zm10-16v6.116l2-1.193l2 1.193V4z");
}
</style><path class="l9i9of-za"/>`,
		"fallback": "material-symbols-light:collections-bookmark-sharp",
	});
}

export default Component;
