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
		"content": `<style>.q0jeb4hqf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 2.75h-2q-3.831 0-6.541 2.709Q1.75 8.169 1.75 12t2.709 6.541Q7.169 21.25 11 21.25h2q3.831 0 6.541-2.709Q22.25 15.831 22.25 12t-2.709-6.541Q16.831 2.75 13 2.75M6.25 12q0-2.382 1.684-4.066T12 6.25t4.066 1.684T17.75 12t-1.684 4.066T12 17.75t-4.066-1.684T6.25 12");
}
</style><path class="q0jeb4hqf"/>`,
		"fallback": "uix-solid:garbage-disposal",
	});
}

export default Component;
