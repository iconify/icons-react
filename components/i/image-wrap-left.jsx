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
		"content": `<style>.yjws3npek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7L11 7C12.1046 7 13 7.8954 13 9L13 15C13 16.1046 12.1046 17 11 17L5 17C3.8954 17 3 16.1046 3 15L3 9C3 7.8954 3.8954 7 5 7ZM3 3H21M3 21H21M17 9H21M17 15H21");
}
</style><path class="yjws3npek"/>`,
		"fallback": "keyline-icons:image-wrap-left",
	});
}

export default Component;
