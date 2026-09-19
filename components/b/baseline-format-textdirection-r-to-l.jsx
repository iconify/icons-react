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
		"content": `<style>.els9svunr {
  fill: currentColor;
  d: path("M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4m-2 7v-3l-4 4l4 4v-3h12v-2z");
}
</style><path class="els9svunr"/>`,
		"fallback": "ic:baseline-format-textdirection-r-to-l",
	});
}

export default Component;
