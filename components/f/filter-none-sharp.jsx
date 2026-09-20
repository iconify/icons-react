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
		"content": `<style>.n7lmgrhuc {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="n7lmgrhuc"/>`,
		"fallback": "material-symbols:filter-none-sharp",
	});
}

export default Component;
