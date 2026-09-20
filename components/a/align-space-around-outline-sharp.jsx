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
		"content": `<style>.jcu0-pppt {
  fill: currentColor;
  d: path("M2 4V2h20v2zm0 18v-2h20v2zM7 9V6h10v3zm0 9v-3h10v3z");
}
</style><path class="jcu0-pppt"/>`,
		"fallback": "material-symbols:align-space-around-outline-sharp",
	});
}

export default Component;
