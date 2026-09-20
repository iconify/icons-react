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
		"content": `<style>.a9td6sb4x {
  fill: currentColor;
  d: path("M19 12A7 7 0 0 0 8.392 6H9a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v.516a9 9 0 1 1-3.93 6.36a1 1 0 1 1 1.984.248Q5 11.554 5 12a7 7 0 1 0 14 0");
}
</style><path class="a9td6sb4x"/>`,
		"fallback": "fluent:arrow-counterclockwise-24-filled",
	});
}

export default Component;
