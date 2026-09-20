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
		"content": `<style>.i-31-mbsn {
  fill: currentColor;
  d: path("M11 15h2l4-8V5h-6v2h4zm-5 3V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="i-31-mbsn"/>`,
		"fallback": "material-symbols:filter-7-sharp",
	});
}

export default Component;
