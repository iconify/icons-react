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
		"content": `<style>.aa9u5v4ut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6V18M2 14L5.6464 17.6464C5.8417 17.8417 6.1583 17.8417 6.3536 17.6464L10 14M14 6H16M14 10H18M14 14H20M14 18H22");
}
</style><path class="aa9u5v4ut"/>`,
		"fallback": "keyline-icons:arrow-down-narrow-wide",
	});
}

export default Component;
