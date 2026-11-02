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
		"content": `<style>.rgsrqpj6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 12L8 7l-5 5m18 5H8V7");
}
</style><path class="rgsrqpj6e"/>`,
		"fallback": "coolicons:arrow-turn-left-up-duocolor-sharp",
	});
}

export default Component;
