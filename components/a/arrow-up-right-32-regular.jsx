import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.by1s2nban {
  fill: currentColor;
  d: path("M15 3a1 1 0 1 0 0 2h10.585L3.297 27.289a1 1 0 1 0 1.414 1.414L27 6.414V17a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1z");
}
</style><path class="by1s2nban"/>`,
		"fallback": "fluent:arrow-up-right-32-regular",
	});
}

export default Component;
