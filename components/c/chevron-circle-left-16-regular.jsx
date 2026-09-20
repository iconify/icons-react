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
		"content": `<style>.za_yzf_ka {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m.646 2.646a.5.5 0 1 1 .708.708L6.707 8l2.647 2.646a.5.5 0 1 1-.708.707l-3-3a.5.5 0 0 1 0-.707z");
}
</style><path class="za_yzf_ka"/>`,
		"fallback": "fluent:chevron-circle-left-16-regular",
	});
}

export default Component;
