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
		"content": `<style>.dv0d6ybtl {
  fill: currentColor;
  d: path("M11 15h6v-2h-4v-2h4V5h-6v2h4v2h-4zm-5 3V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="dv0d6ybtl"/>`,
		"fallback": "material-symbols:filter-2-sharp",
	});
}

export default Component;
