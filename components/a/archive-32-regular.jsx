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
		"content": `<style>.n6z3b16_c {
  fill: currentColor;
  d: path("M13 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.236V23.5a5.5 5.5 0 0 1-5.5 5.5h-13A5.5 5.5 0 0 1 4 23.5V10.236C3.386 9.686 3 8.888 3 8zm3 5v12.5A3.5 3.5 0 0 0 9.5 27h13a3.5 3.5 0 0 0 3.5-3.5V11zm0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z");
}
</style><path class="n6z3b16_c"/>`,
		"fallback": "fluent:archive-32-regular",
	});
}

export default Component;
