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
		"content": `<style>.beg17-bgm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5L6 18L19 18M6.4929 17.5071L18.2929 5.7071");
}
</style><path class="beg17-bgm"/>`,
		"fallback": "keyline-icons:arrow-down-left-sharp-fill",
	});
}

export default Component;
