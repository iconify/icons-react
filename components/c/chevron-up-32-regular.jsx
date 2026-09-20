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
		"content": `<style>.ddwhpcbzl {
  fill: currentColor;
  d: path("M5.293 20.707a1 1 0 0 0 1.414 0L16 11.414l9.293 9.293a1 1 0 0 0 1.414-1.414l-10-10a1 1 0 0 0-1.414 0l-10 10a1 1 0 0 0 0 1.414");
}
</style><path class="ddwhpcbzl"/>`,
		"fallback": "fluent:chevron-up-32-regular",
	});
}

export default Component;
