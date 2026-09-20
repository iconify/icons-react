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
		"content": `<style>.tf9mk6-qv {
  fill: currentColor;
  d: path("M14 15h2V5h-4v2h2zm-8 3V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="tf9mk6-qv"/>`,
		"fallback": "material-symbols:filter-1-sharp",
	});
}

export default Component;
