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
		"content": `<style>.j3j51ikwi {
  fill: currentColor;
  d: path("M9.646 3.646a.5.5 0 0 0 0 .708L12.293 7H7.5A5.5 5.5 0 0 0 2 12.5a.5.5 0 0 0 1 0A4.5 4.5 0 0 1 7.5 8h4.793l-2.647 2.646a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0");
}
</style><path class="j3j51ikwi"/>`,
		"fallback": "fluent:arrow-forward-16-regular",
	});
}

export default Component;
