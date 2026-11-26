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
		"content": `<style>.rryvy3vhw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.0919 9.5951L14 10L11.9565 19L6.9276 19L9 10M9 2L21 4L21 9L9 10C6.7909 10 5 8.2091 5 6C5 3.7909 6.7909 2 9 2ZM9.5 19C9.5 20.6569 8.1569 22 6.5 22L2 22");
}
</style><path class="rryvy3vhw"/>`,
		"fallback": "keyline-icons:hair-dryer-sharp",
	});
}

export default Component;
