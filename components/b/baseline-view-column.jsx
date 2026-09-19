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
		"content": `<style>.mi6f_gb_b {
  fill: currentColor;
  d: path("M14.67 5v14H9.33V5zm1 14H21V5h-5.33zm-7.34 0V5H3v14z");
}
</style><path class="mi6f_gb_b"/>`,
		"fallback": "ic:baseline-view-column",
	});
}

export default Component;
