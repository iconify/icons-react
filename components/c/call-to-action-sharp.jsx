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
		"content": `<style>.sjhur9baf {
  fill: currentColor;
  d: path("M6 17h12v-3H6zm-4 3V4h20v16z");
}
</style><path class="sjhur9baf"/>`,
		"fallback": "material-symbols:call-to-action-sharp",
	});
}

export default Component;
