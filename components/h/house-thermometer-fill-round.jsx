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
		"content": `<style>.zonihr_8n {
  fill: currentColor;
  d: path("M16 22H8a5 5 0 0 1-5-5v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22m-1.5-8.528V9.5a2.5 2.5 0 1 0-5 0v3.972a3.25 3.25 0 1 0 5 0m-2-3.972v4.373c0 .285.121.556.333.745a1.25 1.25 0 1 1-1.666 0a1 1 0 0 0 .333-.745V9.5a.5.5 0 0 1 1 0");
}
</style><path class="zonihr_8n"/>`,
		"fallback": "coolicons:house-thermometer-fill-round",
	});
}

export default Component;
