import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a3mulrb1s {
  fill: currentColor;
  d: path("M256 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-32-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-85.19 43.79A8 8 0 0 0 132 120h-19.06l10.22-20.42a8 8 0 1 0-14.32-7.16l-16 32A8 8 0 0 0 100 136h19.06l-10.22 20.42a8 8 0 0 0 14.32 7.16l16-32a8 8 0 0 0-.35-7.79");
}
</style><path class="a3mulrb1s"/>`,
		"fallback": "ph:battery-charging-fill",
	});
}

export default Component;
