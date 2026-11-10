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
		"content": `<style>.ra4jogbez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 12C16 10.34 17.3432 9 19 9C20.6568 9 22 10.34 22 12C22 13.66 20.6568 15 19 15C17.3432 15 16 13.66 16 12ZM16 12H8M8 12C8 13.66 6.6568 15 5 15C3.3432 15 2 13.66 2 12C2 10.34 3.3432 9 5 9C6.6568 9 8 10.34 8 12Z");
}
</style><path class="ra4jogbez"/>`,
		"fallback": "keyline-icons:guidepoint",
	});
}

export default Component;
