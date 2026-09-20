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
		"content": `<style>.fb5ncwe2t {
  fill: currentColor;
  d: path("M3 21V3h8v4H9V5H5v14h4v-2h2v4zm10 0v-4h2v2h4V5h-4v2h-2V3h8v18zm-2-6v-2H9v-2h2V9h2v2h2v2h-2v2z");
}
</style><path class="fb5ncwe2t"/>`,
		"fallback": "material-symbols:combine-columns-outline-sharp",
	});
}

export default Component;
