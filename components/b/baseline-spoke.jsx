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
		"content": `<style>.f0z7yppkn {
  fill: currentColor;
  d: path("M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4s4 1.79 4 4m-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4");
}
</style><path class="f0z7yppkn"/>`,
		"fallback": "ic:baseline-spoke",
	});
}

export default Component;
