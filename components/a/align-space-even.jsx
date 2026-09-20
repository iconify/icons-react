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
		"content": `<style>.nwbfslbdt {
  fill: currentColor;
  d: path("M3 4V3h18v1zm0 17v-1h18v1zM7.5 9.5v-2h9v2zm0 7v-2h9v2z");
}
</style><path class="nwbfslbdt"/>`,
		"fallback": "material-symbols-light:align-space-even",
	});
}

export default Component;
