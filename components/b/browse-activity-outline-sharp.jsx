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
		"content": `<style>.nlvwl65bd {
  fill: currentColor;
  d: path("M2 9V3h20v6h-2V5H4v4zm0 9v-7h2v5h16v-5h2v7zm0-7V9h6.6l1.475 2.875L13.425 6h1.2l1.5 3H22v2h-7.125l-.925-1.875L10.575 15h-1.2l-2-4zM1 21v-2h22v2zm11-10.5");
}
</style><path class="nlvwl65bd"/>`,
		"fallback": "material-symbols:browse-activity-outline-sharp",
	});
}

export default Component;
