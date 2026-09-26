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
		"content": `<style>.d5bt6abqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 14.3431L20 8L14 2L8 2C7.889 2 7.779 2.0045 7.6703 2.0134M4.3535 4.3535C4.1264 4.8556 4 5.4131 4 6L4 18C4 20.2091 5.7909 22 8 22L16 22C17.6222 22 19.0188 21.0343 19.6465 19.6465M14 2L14 5C14 6.6569 15.3431 8 17 8L20 8M2 2L22 22");
}
</style><path class="d5bt6abqc"/>`,
		"fallback": "keyline-icons:file-off",
	});
}

export default Component;
