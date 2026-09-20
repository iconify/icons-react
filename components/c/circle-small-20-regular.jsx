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
		"content": `<style>.g8_y08y0n {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="g8_y08y0n"/>`,
		"fallback": "fluent:circle-small-20-regular",
	});
}

export default Component;
