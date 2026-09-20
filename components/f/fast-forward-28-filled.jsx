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
		"content": `<style>.lxulv-bzd {
  fill: currentColor;
  d: path("M15.637 4.857c-1.066-.845-2.635-.086-2.635 1.273v4.57L5.636 4.858c-1.065-.845-2.634-.086-2.634 1.273V21.87c0 1.359 1.57 2.118 2.634 1.273l7.366-5.84v4.565c0 1.359 1.57 2.118 2.634 1.273l9.637-7.64a1.917 1.917 0 0 0 0-3.004z");
}
</style><path class="lxulv-bzd"/>`,
		"fallback": "fluent:fast-forward-28-filled",
	});
}

export default Component;
