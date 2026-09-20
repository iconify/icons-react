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
		"content": `<style>.skr-doe8g {
  fill: currentColor;
  d: path("M3 17V7h18v10zm2-2h14V9H5zm0 0V9z");
}
</style><path class="skr-doe8g"/>`,
		"fallback": "material-symbols:crop-16-9-outline-sharp",
	});
}

export default Component;
