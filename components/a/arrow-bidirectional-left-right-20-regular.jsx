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
		"content": `<style>.g8vzsvbud {
  fill: currentColor;
  d: path("M7.354 5.646a.5.5 0 0 1 0 .708L4.707 9h10.586l-2.647-2.646a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L15.293 10H4.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0");
}
</style><path class="g8vzsvbud"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-20-regular",
	});
}

export default Component;
