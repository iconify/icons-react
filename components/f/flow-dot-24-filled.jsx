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
		"content": `<style>.ds7_2acvs {
  fill: currentColor;
  d: path("M5.5 2.5c1.025 0 1.904.617 2.29 1.5h8.71a4.5 4.5 0 1 1 0 9h-9a2.5 2.5 0 0 0 0 5h8.71A2.499 2.499 0 0 1 21 19a2.5 2.5 0 0 1-4.79 1H7.5a4.5 4.5 0 1 1 0-9h9a2.5 2.5 0 0 0 0-5H7.79A2.499 2.499 0 1 1 5.5 2.5");
}
</style><path class="ds7_2acvs"/>`,
		"fallback": "fluent:flow-dot-24-filled",
	});
}

export default Component;
