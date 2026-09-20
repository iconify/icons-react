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
		"content": `<style>.s_eyo2p1g {
  fill: currentColor;
  d: path("m2.5 2.5l18 18a.75.75 0 0 1-1.06 1.062l-5.063-5.063l-9.877.002v4.75a.75.75 0 0 1-.648.742L3.75 22a.75.75 0 0 1-.743-.648L3 21.25V5.122l-1.56-1.56A.75.75 0 1 1 2.5 2.5m2.617.498h15.137a.75.75 0 0 1 .6 1.2L16.69 9.75l4.164 5.55a.75.75 0 0 1-.6 1.2H18.62l-1.5-1.5h1.634l-3.602-4.8a.75.75 0 0 1 0-.9l3.602-4.802H6.617zM4.5 6.622v8.379l8.377-.002z");
}
</style><path class="s_eyo2p1g"/>`,
		"fallback": "fluent:flag-off-24-regular",
	});
}

export default Component;
