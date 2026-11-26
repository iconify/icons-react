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
		"content": `<style>.ttk311bid {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 10L20 2L4 2L4 22M10 22L4 22L4 18L10 18M8 6L8 14M13 17L20 17L20 22L13 22ZM14.5 17L14.5 15C14.5 13.8954 15.3954 13 16.5 13C17.6046 13 18.5 13.8954 18.5 15L18.5 17");
}
</style><path class="ttk311bid"/>`,
		"fallback": "keyline-icons:book-lock-sharp",
	});
}

export default Component;
