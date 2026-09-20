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
		"content": `<style>.fjo_zg3yw {
  fill: currentColor;
  d: path("M4 20V4h16v16Z");
}
</style><path class="fjo_zg3yw"/>`,
		"fallback": "material-symbols:chrome-maximize-sharp",
	});
}

export default Component;
