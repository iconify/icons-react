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
		"content": `<style>.uwu2gxb5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.8284 4C15.4046 2.8015 14.2714 2 13 2L5 2C3.3432 2 2 3.3432 2 5L2 13C2 14.2714 2.8015 15.4046 4 15.8284M11 8L19 8C20.6568 8 22 9.3432 22 11L22 19C22 20.6568 20.6568 22 19 22L11 22C9.3432 22 8 20.6568 8 19L8 11C8 9.3432 9.3432 8 11 8ZM12 12L18 18M18 12L12 18");
}
</style><path class="uwu2gxb5i"/>`,
		"fallback": "keyline-icons:copy-x",
	});
}

export default Component;
