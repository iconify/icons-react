import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.usie6tz_p {
  fill: currentColor;
  d: path("M140 128v40a12 12 0 0 1-24 0v-40a12 12 0 0 1 24 0m28.06-1.19l-4 40a12 12 0 0 0 10.75 13.13c.4 0 .81.06 1.2.06a12 12 0 0 0 11.93-10.81l4-40a12 12 0 0 0-23.88-2.38m-80.12 0a12 12 0 0 0-23.88 2.38l4 40A12 12 0 0 0 80 180c.39 0 .8 0 1.2-.06a12 12 0 0 0 10.75-13.13Zm156-37.22l-15.07 113A20.06 20.06 0 0 1 209 220H47a20.06 20.06 0 0 1-19.82-17.36l-15.07-113A12 12 0 0 1 24 76h42.55L119 16.1a12 12 0 0 1 18.06 0L189.45 76H232a12 12 0 0 1 11.89 13.59ZM98.45 76h59.1L128 42.22Zm119.84 24H37.71l12.8 96h155Z");
}
</style><path class="usie6tz_p"/>`,
		"fallback": "ph:basket-bold",
	});
}

export default Component;
