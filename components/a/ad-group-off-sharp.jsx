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
		"content": `<style>.or7uc5buq {
  fill: currentColor;
  d: path("M20.5 23.3L15.2 18H6V8.8L.7 3.5l1.4-1.4l19.8 19.8zM2 22V6h2v14h14v2zm18.7-4.125L8.825 6H20V4H8v1.175L6.125 3.3V2H22v15.875z");
}
</style><path class="or7uc5buq"/>`,
		"fallback": "material-symbols:ad-group-off-sharp",
	});
}

export default Component;
