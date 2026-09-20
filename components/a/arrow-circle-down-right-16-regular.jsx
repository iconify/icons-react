import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oikjm_w1v {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.5 3.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h3.293L5.646 6.354l-.064-.079a.5.5 0 0 1 .693-.693l.079.064L10 9.293V6a.5.5 0 0 1 .5-.5");
}
</style><path class="oikjm_w1v"/>`,
		"fallback": "fluent:arrow-circle-down-right-16-regular",
	});
}

export default Component;
