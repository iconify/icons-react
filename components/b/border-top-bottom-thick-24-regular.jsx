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
		"content": `<style>.an0d__b0a {
  fill: currentColor;
  d: path("M3 6.25a.75.75 0 0 0 1.5 0v-.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75zm1.5 4.5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm15 0a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0zM4 17a1 1 0 0 0-1 1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a1 1 0 1 0-2 0a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1a1 1 0 0 0-1-1");
}
</style><path class="an0d__b0a"/>`,
		"fallback": "fluent:border-top-bottom-thick-24-regular",
	});
}

export default Component;
