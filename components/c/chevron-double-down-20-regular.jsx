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
		"content": `<style>.ivno8najc {
  fill: currentColor;
  d: path("M15.147 9.646a.5.5 0 1 1 .707.707l-5.5 5.5a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 1 1 .708-.707L10 14.793zm0-5a.5.5 0 1 1 .707.708l-5.5 5.5a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 1 1 .708-.708L10 9.793z");
}
</style><path class="ivno8najc"/>`,
		"fallback": "fluent:chevron-double-down-20-regular",
	});
}

export default Component;
