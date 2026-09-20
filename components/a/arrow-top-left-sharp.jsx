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
		"content": `<style>.krb_--bfb {
  fill: currentColor;
  d: path("M17 20V10H7.825l3.6 3.6l-1.4 1.425L4 9l6-6l1.425 1.425L7.825 8H19v12z");
}
</style><path class="krb_--bfb"/>`,
		"fallback": "material-symbols:arrow-top-left-sharp",
	});
}

export default Component;
