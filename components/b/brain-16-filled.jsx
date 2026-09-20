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
		"content": `<style>.svb27-bnd {
  fill: currentColor;
  d: path("M6.25 1c.463 0 .892.142 1.25.382v12.985A2.73 2.73 0 0 1 5.75 15H5.5a2.5 2.5 0 0 1-2.467-2.111a2.956 2.956 0 0 1-.207-5.537A2.5 2.5 0 0 1 2 5.5a2.5 2.5 0 0 1 2.01-2.452A2.25 2.25 0 0 1 6.25 1m3.5 0c1.175 0 2.137.9 2.24 2.048A2.5 2.5 0 0 1 14 5.5a2.5 2.5 0 0 1-.826 1.852a2.956 2.956 0 0 1-.207 5.537A2.5 2.5 0 0 1 10.5 15h-.25a2.73 2.73 0 0 1-1.75-.633V1.382C8.858 1.142 9.287 1 9.75 1");
}
</style><path class="svb27-bnd"/>`,
		"fallback": "fluent:brain-16-filled",
	});
}

export default Component;
