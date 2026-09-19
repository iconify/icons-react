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
		"content": `<style>.zwn674mhx {
  fill: currentColor;
  d: path("M13 4L2 20h17l3-16zm1.5 10a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="zwn674mhx"/>`,
		"fallback": "ic:baseline-airlines",
	});
}

export default Component;
