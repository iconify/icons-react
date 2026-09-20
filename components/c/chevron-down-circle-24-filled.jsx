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
		"content": `<style>.qoi5a0bfd {
  d: path("M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zM7.47 9.97a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 0 0-1.06-1.06L12 13.44L8.53 9.97a.75.75 0 0 0-1.06 0z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="qoi5a0bfd"/>`,
		"fallback": "fluent:chevron-down-circle-24-filled",
	});
}

export default Component;
