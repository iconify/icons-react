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
		"content": `<style>.sy7dwg_1d {
  fill: currentColor;
  d: path("M9 15v-5q-1.65 0-2.825-1.175T5 6t1.175-2.825T9 2h8v2h-2v11h-2V4h-2v11zm-2.2 4l1.6 1.6L7 22l-4-4l4-4l1.4 1.4L6.8 17H21v2z");
}
</style><path class="sy7dwg_1d"/>`,
		"fallback": "material-symbols:format-textdirection-r-to-l-sharp",
	});
}

export default Component;
