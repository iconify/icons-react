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
		"content": `<style>.stjrj5e_a {
  fill: currentColor;
  d: path("M5.06 4.457A.75.75 0 0 1 5.75 4h12.5a.75.75 0 0 1 0 1.5H7.52l5.36 5.539a.75.75 0 0 1 .03 1.01L7.38 18.5h10.87a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.57-1.238l6.147-7.17l-6.116-6.32a.75.75 0 0 1-.152-.815");
}
</style><path class="stjrj5e_a"/>`,
		"fallback": "fluent:autosum-24-regular",
	});
}

export default Component;
