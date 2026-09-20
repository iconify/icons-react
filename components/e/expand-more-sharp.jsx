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
		"content": `<style>.ai2q2obhe {
  fill: currentColor;
  d: path("m12 15.375l-6-6l1.4-1.4l4.6 4.6l4.6-4.6l1.4 1.4z");
}
</style><path class="ai2q2obhe"/>`,
		"fallback": "material-symbols:expand-more-sharp",
	});
}

export default Component;
