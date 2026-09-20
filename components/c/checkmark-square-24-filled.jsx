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
		"content": `<style>.y59j2bbay {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm10.03 6.78l-5 5a.75.75 0 0 1-1.06 0l-2.004-2.004a.75.75 0 1 1 1.06-1.06l1.474 1.473l4.47-4.47a.75.75 0 1 1 1.06 1.061");
}
</style><path class="y59j2bbay"/>`,
		"fallback": "fluent:checkmark-square-24-filled",
	});
}

export default Component;
