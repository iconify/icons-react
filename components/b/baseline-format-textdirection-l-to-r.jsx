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
		"content": `<style>.zw1bwcbta {
  fill: currentColor;
  d: path("M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4m12 8l-4-4v3H5v2h12v3z");
}
</style><path class="zw1bwcbta"/>`,
		"fallback": "ic:baseline-format-textdirection-l-to-r",
	});
}

export default Component;
