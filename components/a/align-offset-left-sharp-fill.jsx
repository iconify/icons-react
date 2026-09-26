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
		"content": `<style>.pdl7h5bjg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 1L4 9M12 1L12 21M20 9L20 23");
}
</style><path class="pdl7h5bjg"/>`,
		"fallback": "keyline-icons:align-offset-left-sharp-fill",
	});
}

export default Component;
