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
		"content": `<style>.li96v1bko {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.125 1.75h2.75q3.375 0 3.375 3.375v2.75q0 3.375-3.375 3.375h-2.75q-3.375 0-3.375-3.375v-2.75q0-3.375 3.375-3.375m13.75 0h-2.75q-3.375 0-3.375 3.375v2.75q0 3.375 3.375 3.375h2.75q3.375 0 3.375-3.375v-2.75q0-3.375-3.375-3.375m-8.25 11h2.75q3.375 0 3.375 3.375v2.75q0 3.375-3.375 3.375h-2.75q-3.375 0-3.375-3.375v-2.75q0-3.375 3.375-3.375");
}
</style><path class="li96v1bko"/>`,
		"fallback": "uix-solid:device-group",
	});
}

export default Component;
