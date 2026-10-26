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
		"content": `<style>.xnye-qb0u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 20L2 20ZM10 10C10 11.1046 9.1046 12 8 12C6.8954 12 6 11.1046 6 10C6 8.8954 6.8954 8 8 8C9.1046 8 10 8.8954 10 10ZM18 10C18 11.1046 17.1046 12 16 12C14.8954 12 14 11.1046 14 10C14 8.8954 14.8954 8 16 8C17.1046 8 18 8.8954 18 10ZM8 12L16 12M6 20L7.4786 16.5L16.5214 16.5L18 20");
}
</style><path class="xnye-qb0u"/>`,
		"fallback": "keyline-icons:cassette-tape-sharp",
	});
}

export default Component;
