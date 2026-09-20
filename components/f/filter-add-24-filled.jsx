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
		"content": `<style>.akmts3wjy {
  fill: currentColor;
  d: path("M14 16a1 1 0 0 1 .116 1.993L14 18h-4a1 1 0 0 1-.116-1.993L10 16zm-1.979-5a6.5 6.5 0 0 0 2.013 2H8a1 1 0 0 1-.116-1.993L8 11zM17.5 2a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 1.999a.5.5 0 0 0-.5.5V7h-2.505a.5.5 0 0 0 0 1h2.506v2.504a.5.5 0 0 0 1 0V8h2.496a.5.5 0 0 0 0-1H18V4.499a.5.5 0 0 0-.5-.5M11.174 6a6.5 6.5 0 0 0-.155 2H5a1 1 0 0 1-.116-1.993L5 6z");
}
</style><path class="akmts3wjy"/>`,
		"fallback": "fluent:filter-add-24-filled",
	});
}

export default Component;
