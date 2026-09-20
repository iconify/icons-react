import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hr-4ebtvw {
  fill: currentColor;
  d: path("M5.5 6.5a.5.5 0 0 0 1 0V2.707l1.146 1.147a.5.5 0 1 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L5.5 2.707zM6 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="hr-4ebtvw"/>`,
		"fallback": "fluent:arrow-step-out-12-filled",
	});
}

export default Component;
