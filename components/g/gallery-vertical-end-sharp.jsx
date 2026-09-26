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
		"content": `<style>.nj3eyr2qo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11L21 11L21 21L3 21L3 11ZM4 7L20 7M6 3L18 3");
}
</style><path class="nj3eyr2qo"/>`,
		"fallback": "keyline-icons:gallery-vertical-end-sharp",
	});
}

export default Component;
