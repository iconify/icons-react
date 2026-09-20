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
		"content": `<style>.dngw_5kvp {
  fill: currentColor;
  d: path("M11.349 2.1a3.75 3.75 0 0 1 5.303 0l9.252 9.25a3.75 3.75 0 0 1 0 5.304l-9.252 9.251a3.75 3.75 0 0 1-5.303 0l-9.251-9.25a3.75 3.75 0 0 1 0-5.305zm4.242 1.06a2.25 2.25 0 0 0-3.182 0l-9.25 9.252a2.25 2.25 0 0 0 0 3.182l9.25 9.25a2.25 2.25 0 0 0 3.182 0l9.251-9.25a2.25 2.25 0 0 0 0-3.182zm1.629 6.56a.75.75 0 0 1 1.06 1.06L15.06 14l3.22 3.22a.75.75 0 0 1-1.06 1.06L14 15.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L12.94 14l-3.22-3.22a.75.75 0 1 1 1.06-1.06L14 12.94z");
}
</style><path class="dngw_5kvp"/>`,
		"fallback": "fluent:diamond-dismiss-28-regular",
	});
}

export default Component;
