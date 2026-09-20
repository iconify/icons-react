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
		"content": `<style>.ln5_fkbyx {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2zM13 4v7l2.5-1.5L18 11V4z");
}
</style><path class="ln5_fkbyx"/>`,
		"fallback": "material-symbols:collections-bookmark-sharp",
	});
}

export default Component;
