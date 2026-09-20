import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.adpfvl5ij {
  fill: currentColor;
  d: path("M9.309 4H19.5A5.5 5.5 0 0 1 25 9.5v16.66a3.6 3.6 0 0 0 2-3.227V9.5A7.5 7.5 0 0 0 19.5 2h-6.967A3.6 3.6 0 0 0 9.31 4m-.56 2A3.75 3.75 0 0 0 5 9.75V29a1 1 0 0 0 1.591.806l6.945-5.092l7.92 5.126A1 1 0 0 0 23 29V9.75A3.75 3.75 0 0 0 19.25 6z");
}
</style><path class="adpfvl5ij"/>`,
		"fallback": "fluent:bookmark-multiple-32-filled",
	});
}

export default Component;
