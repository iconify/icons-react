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
		"content": `<style>.i2_g6rcvy {
  fill: currentColor;
  d: path("M3 21V3h18v18zM19 7.25l-6.05 6.8L9 10.1l-4 4v2.85l4-4L13.05 17L19 10.25z");
}
</style><path class="i2_g6rcvy"/>`,
		"fallback": "material-symbols:drive-fusiontable-sharp",
	});
}

export default Component;
