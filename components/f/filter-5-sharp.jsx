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
		"content": `<style>.jlmxwvbmf {
  fill: currentColor;
  d: path("M11 15h6V9h-4V7h4V5h-6v6h4v2h-4zm-5 3V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="jlmxwvbmf"/>`,
		"fallback": "material-symbols:filter-5-sharp",
	});
}

export default Component;
