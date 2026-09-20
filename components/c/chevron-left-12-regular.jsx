import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xtyi2l_ww {
  fill: currentColor;
  d: path("M7.354 2.146a.5.5 0 0 1 0 .708L4.207 6l3.147 3.146a.5.5 0 1 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0");
}
</style><path class="xtyi2l_ww"/>`,
		"fallback": "fluent:chevron-left-12-regular",
	});
}

export default Component;
