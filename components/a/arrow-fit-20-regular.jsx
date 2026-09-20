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
		"content": `<style>.w7leo2l2m {
  fill: currentColor;
  d: path("M5.354 6.646a.5.5 0 0 1 0 .708L3.707 9H8.5a.5.5 0 0 1 0 1H3.707l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m9.292 0a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L16.293 10H11.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708");
}
</style><path class="w7leo2l2m"/>`,
		"fallback": "fluent:arrow-fit-20-regular",
	});
}

export default Component;
