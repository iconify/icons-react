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
		"content": `<style>.a_8cqob_q {
  fill: currentColor;
  d: path("M4.147 12.353a.5.5 0 0 1-.001-.707L9.61 6.162a.55.55 0 0 1 .779 0l5.465 5.484a.5.5 0 0 1-.708.706L10 7.188l-5.146 5.164a.5.5 0 0 1-.707.001");
}
</style><path class="a_8cqob_q"/>`,
		"fallback": "fluent:chevron-up-20-regular",
	});
}

export default Component;
