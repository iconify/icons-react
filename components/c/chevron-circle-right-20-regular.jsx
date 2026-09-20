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
		"content": `<style>.y2dv-bb3d {
  fill: currentColor;
  d: path("M10 17a7 7 0 1 1 0-14a7 7 0 0 1 0 14m-8-7a8 8 0 1 0 16 0a8 8 0 0 0-16 0m6.146 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L11.293 10z");
}
</style><path class="y2dv-bb3d"/>`,
		"fallback": "fluent:chevron-circle-right-20-regular",
	});
}

export default Component;
