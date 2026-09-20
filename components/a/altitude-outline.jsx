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
		"content": `<style>.ngjo63gsy {
  fill: currentColor;
  d: path("M18 12V7.8l-1.6 1.6L15 8l4-4l4 4l-1.4 1.425l-1.6-1.6V12zM1 22l6-8l4.5 6H19l-5-6.65l-2.5 3.3L10.25 15L14 10l9 12zm10.5-2");
}
</style><path class="ngjo63gsy"/>`,
		"fallback": "material-symbols:altitude-outline",
	});
}

export default Component;
