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
		"content": `<style>.ktop44b7y {
  fill: currentColor;
  d: path("M3 18V6h18v12z");
}
</style><path class="ktop44b7y"/>`,
		"fallback": "material-symbols:crop-3-2-sharp",
	});
}

export default Component;
