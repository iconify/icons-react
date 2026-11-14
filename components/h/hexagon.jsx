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
		"content": `<style>.gpm9637lk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.688 2.358l5.818 3.359q1.688.975 1.688 2.924v6.718q0 1.949-1.688 2.924l-5.818 3.359q-1.687.974-3.375 0l-5.819-3.359q-1.688-.975-1.688-2.924V8.641q0-1.949 1.688-2.924l5.819-3.359q1.688-.974 3.375 0");
}
</style><path class="gpm9637lk"/>`,
		"fallback": "uix-solid:hexagon",
	});
}

export default Component;
