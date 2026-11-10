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
		"content": `<style>.k52__3blv {
  fill: currentColor;
  d: path("M11 1V23H9V17H4C3.448 17 3 16.552 3 16V8C3 7.448 3.448 7 4 7H9V1H11ZM21 1V23H19V21H14C13.448 21 13 20.552 13 20V4C13 3.448 13.448 3 14 3H19V1H21Z");
}
</style><path class="k52__3blv"/>`,
		"fallback": "keyline-icons:align-horizontal-distribute-end-sharp-fill",
	});
}

export default Component;
