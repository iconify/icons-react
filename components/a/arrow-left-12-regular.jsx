import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x47pdhbjs {
  fill: currentColor;
  d: path("M10.5 6a.5.5 0 0 0-.5-.5H3.207l2.647-2.646a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L3.207 6.5H10a.5.5 0 0 0 .5-.5");
}
</style><path class="x47pdhbjs"/>`,
		"fallback": "fluent:arrow-left-12-regular",
	});
}

export default Component;
