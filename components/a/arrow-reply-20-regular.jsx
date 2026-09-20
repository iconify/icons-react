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
		"content": `<style>.d44arq5fj {
  fill: currentColor;
  d: path("M7.354 3.646a.5.5 0 0 1 0 .708L3.707 8H10.5a7.5 7.5 0 0 1 7.5 7.5a.5.5 0 0 1-1 0A6.5 6.5 0 0 0 10.5 9H3.707l3.647 3.646a.5.5 0 0 1-.708.708l-4.5-4.5a.5.5 0 0 1 0-.708l4.5-4.5a.5.5 0 0 1 .708 0");
}
</style><path class="d44arq5fj"/>`,
		"fallback": "fluent:arrow-reply-20-regular",
	});
}

export default Component;
