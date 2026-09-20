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
		"content": `<style>.sk1rqtjdt {
  fill: currentColor;
  d: path("m9.146 13.354l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L7.707 9.5H13.5a.5.5 0 0 1 0 1H7.707l2.147 2.146a.5.5 0 0 1-.708.708M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0m8 7a7 7 0 1 1 0-14a7 7 0 0 1 0 14");
}
</style><path class="sk1rqtjdt"/>`,
		"fallback": "fluent:arrow-circle-left-20-regular",
	});
}

export default Component;
