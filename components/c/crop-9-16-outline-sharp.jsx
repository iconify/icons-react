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
		"content": `<style>.brxko0bmj {
  fill: currentColor;
  d: path("M7 21V3h10v18zM9 5v14h6V5zm0 14V5z");
}
</style><path class="brxko0bmj"/>`,
		"fallback": "material-symbols:crop-9-16-outline-sharp",
	});
}

export default Component;
