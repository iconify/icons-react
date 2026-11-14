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
		"content": `<style>.hikepxuda {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.75 1.75h8.5q2.485 0 4.243 1.757Q22.25 5.265 22.25 7.75v8.5q0 2.485-1.757 4.243q-1.758 1.757-4.243 1.757h-8.5q-2.485 0-4.243-1.757Q1.75 18.735 1.75 16.25v-8.5q0-2.485 1.757-4.243Q5.265 1.75 7.75 1.75m.184 6.184Q6.25 9.618 6.25 12t1.684 4.066T12 17.75t4.066-1.684T17.75 12t-1.684-4.066T12 6.25T7.934 7.934");
}
</style><path class="hikepxuda"/>`,
		"fallback": "uix-solid:api-endpoint",
	});
}

export default Component;
