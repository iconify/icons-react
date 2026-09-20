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
		"content": `<style>.gw-8m-blt {
  fill: currentColor;
  d: path("M21 7h-6V5h6zM5 21V3h9q-.5.75-.75 1.438T13 6q0 1.8 1.138 3.175T17 10.9q.575.075 1 .075t1-.075V21l-7-3z");
}
</style><path class="gw-8m-blt"/>`,
		"fallback": "material-symbols:bookmark-remove-sharp",
	});
}

export default Component;
