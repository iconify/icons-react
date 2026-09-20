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
		"content": `<style>.as_lewtun {
  fill: currentColor;
  d: path("M13.385 10.116V4H4v13.644L5.65 16H20V4h-2.616v6.116l-2-1.193zM3 20.077V3h18v14H6.077zM4 4v13.385z");
}
</style><path class="as_lewtun"/>`,
		"fallback": "material-symbols-light:comment-bank-outline-sharp",
	});
}

export default Component;
