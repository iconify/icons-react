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
		"content": `<style>.nfw0oebbq {
  fill: currentColor;
  d: path("M5 8v11h14V8h-3v8l-4-2l-4 2V8zM3 21V5.8L5.3 3h13.4L21 5.8V21zM5.4 6h13.2l-.85-1H6.25zM10 8v4.75l2-1l2 1V8zM5 8h14z");
}
</style><path class="nfw0oebbq"/>`,
		"fallback": "material-symbols:box-outline-sharp",
	});
}

export default Component;
