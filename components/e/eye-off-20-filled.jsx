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
		"content": `<style>.iglsb6a1n {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.1 8.1 0 0 0-3.366 5.046a.5.5 0 1 0 .979.204a7.1 7.1 0 0 1 3.108-4.528L7.95 8.656a3.5 3.5 0 1 0 4.884 4.884l4.313 4.314a.5.5 0 0 0 .708-.708zm7.27 5.857l3.363 3.363a3.5 3.5 0 0 0-3.363-3.363M7.53 5.41l.803.803A6.6 6.6 0 0 1 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 1 0 .98-.204C16.943 7.673 13.693 5 10 5c-.855 0-1.687.143-2.469.41");
}
</style><path class="iglsb6a1n"/>`,
		"fallback": "fluent:eye-off-20-filled",
	});
}

export default Component;
