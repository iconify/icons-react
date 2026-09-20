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
		"content": `<style>.bvoij5btx {
  fill: currentColor;
  d: path("M3.018 9.5h13.964a7 7 0 0 0-13.964 0M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m14.982.5H3.018a7 7 0 0 0 13.964 0");
}
</style><path class="bvoij5btx"/>`,
		"fallback": "fluent:circle-line-20-regular",
	});
}

export default Component;
