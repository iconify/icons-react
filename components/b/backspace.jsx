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
		"content": `<style>.thpkftuyd {
  fill: currentColor;
  d: path("m11.054 15.308l2.6-2.6l2.6 2.6l.707-.708l-2.6-2.6l2.6-2.6l-.707-.708l-2.6 2.6l-2.6-2.6l-.708.708l2.6 2.6l-2.6 2.6zM9.173 19q-.383 0-.727-.166t-.565-.461L3 12l4.88-6.373q.223-.294.566-.46T9.173 5h10.212q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="thpkftuyd"/>`,
		"fallback": "material-symbols-light:backspace",
	});
}

export default Component;
