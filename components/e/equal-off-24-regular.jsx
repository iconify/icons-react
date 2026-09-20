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
		"content": `<style>.oucg--bpf {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06L6.94 8H3.75a.75.75 0 0 0 0 1.5h4.69l5 5H3.75a.75.75 0 0 0 0 1.5h11.19l5.78 5.78a.75.75 0 0 0 1.06-1.06zM20.25 14.5h-2.568l1.5 1.5h1.068a.75.75 0 0 0 0-1.5M11.182 8l1.5 1.5h7.568a.75.75 0 0 0 0-1.5z");
}
</style><path class="oucg--bpf"/>`,
		"fallback": "fluent:equal-off-24-regular",
	});
}

export default Component;
