import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l1wt4h5yx {
  fill: currentColor;
  d: path("M10.75 21.005a.75.75 0 1 1 0-1.5h7.67l-15.2-15.2a.765.765 0 1 1 1.081-1.081l15.2 15.2v-7.67a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-.75.75z");
}
</style><path class="l1wt4h5yx"/>`,
		"fallback": "fluent:arrow-down-right-24-regular",
	});
}

export default Component;
