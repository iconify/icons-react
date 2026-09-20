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
		"content": `<style>.l8ay8_bvk {
  fill: currentColor;
  d: path("m14.056 22.008l-3.5-3.514l1.348-1.386l-8.15-11.65L7 2.212l13.439 13.432zm-1.458-5.614l3.614-3.569L7 3.614L5.046 5.567zm1.477 4.193l4.937-4.937l-2.112-2.136l-4.961 4.961zm-1.477-4.193l3.614-3.569z");
}
</style><path class="l8ay8_bvk"/>`,
		"fallback": "material-symbols-light:carpenter-outline-sharp",
	});
}

export default Component;
