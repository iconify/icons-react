import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bajdo0b0g {
  fill: currentColor;
  d: path("M6.527 6.442A2.75 2.75 0 0 1 8.947 5h10.111a2.75 2.75 0 0 1 2.42 1.442l3.951 7.311c.2.37.35.764.445 1.17q.125.393.127.827v4.5A2.75 2.75 0 0 1 23.25 23H4.753a2.75 2.75 0 0 1-2.75-2.75v-4.5q.002-.434.126-.827c.096-.406.245-.8.445-1.17zm13.63.714a1.25 1.25 0 0 0-1.099-.656H8.946c-.459 0-.881.252-1.1.656L4.688 13h18.629zM3.578 15.33a3.3 3.3 0 0 0-.073.682v4.238c0 .69.56 1.25 1.25 1.25H23.25c.69 0 1.25-.56 1.25-1.25v-4.238q0-.346-.072-.682a1.25 1.25 0 0 0-1.178-.83H4.755a1.25 1.25 0 0 0-1.178.83M21 19.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><path class="bajdo0b0g"/>`,
		"fallback": "fluent:hard-drive-28-regular",
	});
}

export default Component;
