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
		"content": `<style>.fx0h-rjhb {
  fill: currentColor;
  d: path("M7.25 6.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h.5v2.69l-1.78 1.78a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06 0l1.78-1.78h2.69v.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.5h-2.69l-1.56-1.56V10.5h.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17");
}
</style><path class="fx0h-rjhb"/>`,
		"fallback": "fluent:flowchart-circle-24-regular",
	});
}

export default Component;
