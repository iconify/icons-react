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
		"content": `<style>.tbdejr6hh {
  fill: currentColor;
  d: path("M13.246 21.005a.75.75 0 1 0 0-1.5H5.577l15.2-15.2a.765.765 0 0 0-1.082-1.081l-15.199 15.2v-7.67a.75.75 0 0 0-1.5 0v9.5c0 .415.336.75.75.75z");
}
</style><path class="tbdejr6hh"/>`,
		"fallback": "fluent:arrow-down-left-24-regular",
	});
}

export default Component;
