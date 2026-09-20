import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y_xo88b-y {
  fill: currentColor;
  d: path("M18.544 2.659a2.25 2.25 0 0 0-3.182 0L8.76 9.262l-1.6-1.6C5.81 6.313 3.5 7.149 3.328 9.049L2.009 23.546a2.25 2.25 0 0 0 2.445 2.445l14.5-1.318c1.9-.173 2.736-2.483 1.387-3.832l-1.602-1.601l6.602-6.602a2.25 2.25 0 0 0 0-3.182z");
}
</style><path class="y_xo88b-y"/>`,
		"fallback": "fluent:arrow-outline-down-left-28-filled",
	});
}

export default Component;
