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
		"content": `<style>.ci78ymb8g {
  fill: currentColor;
  d: path("M17 3.507A.5.5 0 0 0 16.5 3h-8a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708L16 4.707V11.5a.5.5 0 1 0 1 0zM6.854 13.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708zm5-5.708a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0");
}
</style><path class="ci78ymb8g"/>`,
		"fallback": "fluent:arrow-up-right-dashes-20-regular",
	});
}

export default Component;
