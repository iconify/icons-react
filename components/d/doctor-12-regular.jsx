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
		"content": `<style>.gbgc7yb5k {
  fill: currentColor;
  d: path("M4 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm3 0H5v1.5a.5.5 0 0 1-.5.5H3v2h1.5a.5.5 0 0 1 .5.5V9h2V7.5a.5.5 0 0 1 .5-.5H9V5H7.5a.5.5 0 0 1-.5-.5z");
}
</style><path class="gbgc7yb5k"/>`,
		"fallback": "fluent:doctor-12-regular",
	});
}

export default Component;
