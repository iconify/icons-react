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
		"content": `<style>.zruhqpb6m {
  fill: currentColor;
  d: path("M3 20V4h2v16zm9-3l-5-5l5-5l1.4 1.4l-2.6 2.6H21v2H10.8l2.6 2.6z");
}
</style><path class="zruhqpb6m"/>`,
		"fallback": "material-symbols:horizontal-align-left-sharp",
	});
}

export default Component;
