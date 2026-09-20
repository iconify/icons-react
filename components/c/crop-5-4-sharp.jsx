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
		"content": `<style>.r6zpstb_t {
  fill: currentColor;
  d: path("M3 20V4h18v16z");
}
</style><path class="r6zpstb_t"/>`,
		"fallback": "material-symbols:crop-5-4-sharp",
	});
}

export default Component;
