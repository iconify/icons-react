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
		"content": `<style>.yvd2tdppp {
  fill: currentColor;
  d: path("M20 5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3h6l1.83 2zm0 14V7H4v12zm-6-7l-3 3.72L9 13l-3 4h12z");
}
</style><path class="yvd2tdppp"/>`,
		"fallback": "ic:baseline-photo-camera-back",
	});
}

export default Component;
