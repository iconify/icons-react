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
		"content": `<style>.qlyv-4cec {
  fill: currentColor;
  d: path("M16 15V9h5v2h-1.5v-.5h-2v3h2V13H21v2zm-6.5 0V9h4.25l.75.75v1.5l-.75.75l.75.75v1.5l-.75.75zm1.5-3.75h2v-.75h-2zm0 2.25h2v-.75h-2zM3 15V9h5v6H6.5v-1.5h-2V15zm1.5-3h2v-1.5h-2z");
}
</style><path class="qlyv-4cec"/>`,
		"fallback": "material-symbols:abc-sharp",
	});
}

export default Component;
