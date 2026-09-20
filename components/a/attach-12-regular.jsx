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
		"content": `<style>.y61nu_j-s {
  fill: currentColor;
  d: path("M9.01 2.582a2.014 2.014 0 0 0-2.83-.01L2.85 5.844a.5.5 0 0 1-.707-.004a.497.497 0 0 1 .005-.705l3.329-3.271a3.017 3.017 0 0 1 4.24.013a2.987 2.987 0 0 1 0 4.237l-4.332 4.314a1.966 1.966 0 0 1-2.772 0a1.947 1.947 0 0 1 0-2.761l4.04-4.023a.5.5 0 0 1 .706 0a.497.497 0 0 1 0 .704L3.32 8.371a.954.954 0 0 0 0 1.353a.963.963 0 0 0 1.36 0L9.01 5.41a1.994 1.994 0 0 0 0-2.828");
}
</style><path class="y61nu_j-s"/>`,
		"fallback": "fluent:attach-12-regular",
	});
}

export default Component;
