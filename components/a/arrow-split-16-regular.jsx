import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.arf09jz3y {
  fill: currentColor;
  d: path("M8 2a.5.5 0 0 1 .5.5V6h2A1.5 1.5 0 0 1 12 7.5v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V7.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.293V7.5A1.5 1.5 0 0 1 5.5 6h2V2.5A.5.5 0 0 1 8 2");
}
</style><path class="arf09jz3y"/>`,
		"fallback": "fluent:arrow-split-16-regular",
	});
}

export default Component;
