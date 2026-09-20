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
		"content": `<style>.v_o48kq9w {
  fill: currentColor;
  d: path("M17 5a1 1 0 1 0 0 2h6.586L11.618 18.968a5.5 5.5 0 1 0 1.414 1.414L25 8.415V15a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1zM5 23.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0");
}
</style><path class="v_o48kq9w"/>`,
		"fallback": "fluent:arrow-flow-diagonal-up-right-32-regular",
	});
}

export default Component;
