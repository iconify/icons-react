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
		"content": `<style>.t8dtubbwk {
  fill: currentColor;
  d: path("M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5H4.5v12H2.75a.75.75 0 0 0 0 1.5H4.5v1.75a.75.75 0 0 0 1.5 0V19.5h12v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 0 0 0-1.5H19.5V6h1.75a.75.75 0 0 0 0-1.5H19.5V2.75a.75.75 0 0 0-1.5 0V4.5H6zM18 18H6V6h12z");
}
</style><path class="t8dtubbwk"/>`,
		"fallback": "fluent:frame-24-regular",
	});
}

export default Component;
