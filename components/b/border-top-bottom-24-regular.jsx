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
		"content": `<style>.auqqahv7l {
  fill: currentColor;
  d: path("M3.75 7A.75.75 0 0 1 3 6.25v-.5A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v.5a.75.75 0 0 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-.75.75m.75 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm15 0a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0zm-16.5 7a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0v.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25z");
}
</style><path class="auqqahv7l"/>`,
		"fallback": "fluent:border-top-bottom-24-regular",
	});
}

export default Component;
