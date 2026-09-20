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
		"content": `<style>.i0t1-ir_t {
  fill: currentColor;
  d: path("M2.5 4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5M5 10a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.707l3.147-3.147H5.5A.5.5 0 0 1 5 10");
}
</style><path class="i0t1-ir_t"/>`,
		"fallback": "fluent:arrow-export-ltr-20-regular",
	});
}

export default Component;
