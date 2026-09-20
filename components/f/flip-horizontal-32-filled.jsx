import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xi_8ty2dl {
  fill: currentColor;
  d: path("M29.799 27.43a1.25 1.25 0 0 1-1.049.57h-10.5c-.69 0-1.25-.56-1.25-1.25V3.25a1.25 1.25 0 0 1 2.391-.51l10.5 23.5a1.25 1.25 0 0 1-.092 1.19M19.5 9.112V25.5h7.322zM3 28a1 1 0 0 1-.91-1.416l11-24A1 1 0 0 1 15 3v24a1 1 0 0 1-1 1z");
}
</style><path class="xi_8ty2dl"/>`,
		"fallback": "fluent:flip-horizontal-32-filled",
	});
}

export default Component;
