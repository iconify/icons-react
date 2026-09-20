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
		"content": `<style>.eutirbbav {
  fill: currentColor;
  d: path("M8 1a2 2 0 0 1 2 2v7.5a.5.5 0 0 1-.791.407L6 8.614l-3.209 2.293A.5.5 0 0 1 2 10.5V3a2 2 0 0 1 2-2z");
}
</style><path class="eutirbbav"/>`,
		"fallback": "fluent:bookmark-12-filled",
	});
}

export default Component;
