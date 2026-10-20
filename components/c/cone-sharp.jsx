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
		"content": `<style>.h4bolvb-h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.1256 18.4706L12 2L19.8744 18.4706M20 19C20 20.6569 16.4183 22 12 22C7.5817 22 4 20.6569 4 19C4 17.3431 7.5817 16 12 16C16.4183 16 20 17.3431 20 19Z");
}
</style><path class="h4bolvb-h"/>`,
		"fallback": "keyline-icons:cone-sharp",
	});
}

export default Component;
