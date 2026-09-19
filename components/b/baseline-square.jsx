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
		"content": `<style>.dk6vc83tr {
  fill: currentColor;
  d: path("M3 3h18v18H3z");
}
</style><path class="dk6vc83tr"/>`,
		"fallback": "ic:baseline-square",
	});
}

export default Component;
