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
		"content": `<style>.iz2vr5gsx {
  fill: currentColor;
  d: path("M3 22v-8h18v8zm0-10V4h4.1q-.05.25-.075.488T7 5q0 2.075 1.45 3.538T12 10t3.55-1.463T17 5q0-.275-.025-.513T16.9 4H21v8zm8-4V6H9V4h2V2h2v2h2v2h-2v2z");
}
</style><path class="iz2vr5gsx"/>`,
		"fallback": "material-symbols:add-row-above",
	});
}

export default Component;
