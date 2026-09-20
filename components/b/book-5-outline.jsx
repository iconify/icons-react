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
		"content": `<style>.ztk816bhs {
  fill: currentColor;
  d: path("M6.75 22q-1.125 0-1.937-.763T4 19.35V5.4q0-.95.588-1.7t1.537-.95L16 .8v16l-9.475 1.9q-.225.05-.375.238T6 19.35q0 .275.225.463T6.75 20H18V4h2v18zM9 16.175l5-.975V3.25l-5 .975zm-2 .4V4.625l-.375.075q-.275.05-.45.238T6 5.4v11.425q.125-.05.263-.087t.262-.063zm-1-11.8v12.05z");
}
</style><path class="ztk816bhs"/>`,
		"fallback": "material-symbols:book-5-outline",
	});
}

export default Component;
