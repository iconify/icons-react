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
		"content": `<style>.rakj_4tqk {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2zm13-7h2V5h-2v4h-2V5h-2v6h4z");
}
</style><path class="rakj_4tqk"/>`,
		"fallback": "material-symbols:filter-4-sharp",
	});
}

export default Component;
