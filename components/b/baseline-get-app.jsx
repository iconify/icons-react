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
		"content": `<style>.ifp2n7k6a {
  fill: currentColor;
  d: path("M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z");
}
</style><path class="ifp2n7k6a"/>`,
		"fallback": "ic:baseline-get-app",
	});
}

export default Component;
