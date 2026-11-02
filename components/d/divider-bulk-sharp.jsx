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
		"content": `<style>.gd18994yc {
  fill: currentColor;
  d: path("M13 5v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0");
}
</style><path class="gd18994yc"/>`,
		"fallback": "coolicons:divider-bulk-sharp",
	});
}

export default Component;
