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
		"content": `<style>.w-vg6ub-h {
  fill: currentColor;
  d: path("M2 4V2h20v2zm0 18v-2h20v2zm5-12V7h10v3zm0 7v-3h10v3z");
}
</style><path class="w-vg6ub-h"/>`,
		"fallback": "material-symbols:align-space-even-sharp",
	});
}

export default Component;
