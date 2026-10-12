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
		"content": `<style>.l6r2agxan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 4L17 4C18.6569 4 20 5.3431 20 7L20 16M16 20L7 20C5.3431 20 4 18.6569 4 17L4 8M8 10L16 10M8 14L14 14");
}
</style><path class="l6r2agxan"/>`,
		"fallback": "keyline-icons:compact",
	});
}

export default Component;
