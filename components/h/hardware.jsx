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
		"content": `<style>.dt4w8ubvw {
  fill: currentColor;
  d: path("M10.27 11.5V7H5.845q.289-1.325 1.357-2.162Q8.27 4 9.653 4h4.616v2.885L17.154 4h1v6.77h-1l-2.885-2.885V11.5zm.769 8.5q-.31 0-.54-.23t-.23-.54v-6.71h4v6.71q0 .31-.23.54T13.5 20z");
}
</style><path class="dt4w8ubvw"/>`,
		"fallback": "material-symbols-light:hardware",
	});
}

export default Component;
