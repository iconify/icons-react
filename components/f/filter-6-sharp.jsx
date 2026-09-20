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
		"content": `<style>.w-sqm5z8y {
  fill: currentColor;
  d: path("M13 9V7h3V5h-5v10h6V9zm0 2h2v2h-2zm-7 7V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="w-sqm5z8y"/>`,
		"fallback": "material-symbols:filter-6-sharp",
	});
}

export default Component;
