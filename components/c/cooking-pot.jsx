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
		"content": `<style>.f_se5lbxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11L4 18C4 19.6569 5.3431 21 7 21L17 21C18.6569 21 20 19.6569 20 18L20 11M2 11L22 11M4 7L20 7M8 7L8 6C8 4.3431 9.3431 3 11 3L13 3C14.6569 3 16 4.3431 16 6L16 7");
}
</style><path class="f_se5lbxv"/>`,
		"fallback": "keyline-icons:cooking-pot",
	});
}

export default Component;
