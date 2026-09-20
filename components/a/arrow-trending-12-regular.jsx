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
		"content": `<style>.p-e-95bmk {
  fill: currentColor;
  d: path("M10.962 2.309A.5.5 0 0 0 10.5 2h-4a.5.5 0 0 0 0 1h2.793L6 6.293L4.854 5.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L4.5 6.207l1.146 1.147a.5.5 0 0 0 .708 0L10 3.707V6.5a.5.5 0 0 0 1 0V2.497a.5.5 0 0 0-.038-.188");
}
</style><path class="p-e-95bmk"/>`,
		"fallback": "fluent:arrow-trending-12-regular",
	});
}

export default Component;
