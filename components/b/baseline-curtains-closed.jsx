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
		"content": `<style>.l0vwpeb-g {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM11 5h2v14h-2z");
}
</style><path class="l0vwpeb-g"/>`,
		"fallback": "ic:baseline-curtains-closed",
	});
}

export default Component;
