import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qollb9b-n {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-1-.393V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.707q.149.524.393 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4m0 7a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 8a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.5-4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}
</style><path class="qollb9b-n"/>`,
		"fallback": "fluent:calendar-record-20-regular",
	});
}

export default Component;
