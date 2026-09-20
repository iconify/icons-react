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
		"content": `<style>.i-y7s1b5q {
  fill: currentColor;
  d: path("M8.998 2.384a1.5 1.5 0 0 1 2.005 0l5.5 4.943A1.5 1.5 0 0 1 17 8.443V15.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5V8.443c0-.425.18-.831.498-1.116zm4.356 6.467a.5.5 0 0 0-.708-.707L9 11.79l-1.646-1.647a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0z");
}
</style><path class="i-y7s1b5q"/>`,
		"fallback": "fluent:home-checkmark-20-filled",
	});
}

export default Component;
