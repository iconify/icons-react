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
		"content": `<style>.i1pa2hbit {
  fill: currentColor;
  d: path("M6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4zm7-1h2V5h-2v4h-2V5h-2v6h4z");
}
</style><path class="i1pa2hbit"/>`,
		"fallback": "material-symbols:filter-4-outline-sharp",
	});
}

export default Component;
