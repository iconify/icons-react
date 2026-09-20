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
		"content": `<style>.xslu2qb0f {
  fill: currentColor;
  d: path("M21 7h-6V5h6zm-9 11l-7 3V3h8v2H7v12.95l5-2.15l5 2.15V11h2v10zM7 5h6z");
}
</style><path class="xslu2qb0f"/>`,
		"fallback": "material-symbols:bookmark-remove-outline-sharp",
	});
}

export default Component;
