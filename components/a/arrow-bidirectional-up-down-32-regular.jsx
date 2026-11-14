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
		"content": `<style>.jdyoozd_h {
  fill: currentColor;
  d: path("M15.293 3.293a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1-1.414 1.414L17 6.414v19.172l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L15 25.586V6.414l-5.293 5.293a1 1 0 1 1-1.414-1.414z");
}
</style><path class="jdyoozd_h"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-32-regular",
	});
}

export default Component;
