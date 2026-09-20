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
		"content": `<style>.heajmgbnt {
  fill: currentColor;
  d: path("M6.354 3.646a.5.5 0 0 1 0 .708L3.707 7H8.5a5.5 5.5 0 0 1 5.5 5.5a.5.5 0 0 1-1 0A4.5 4.5 0 0 0 8.5 8H3.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0");
}
</style><path class="heajmgbnt"/>`,
		"fallback": "fluent:arrow-reply-16-regular",
	});
}

export default Component;
