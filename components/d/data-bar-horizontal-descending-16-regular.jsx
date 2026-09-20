import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m_rpp-0xb {
  fill: currentColor;
  d: path("M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zM2 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m5 12a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zm-5-2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m9-5a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2m-1 0a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1");
}
</style><path class="m_rpp-0xb"/>`,
		"fallback": "fluent:data-bar-horizontal-descending-16-regular",
	});
}

export default Component;
