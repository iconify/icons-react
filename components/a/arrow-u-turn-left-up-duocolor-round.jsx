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
		"content": `<style>.amim8fd2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 7L9 3L5 7m4-4v14a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-6");
}
</style><path class="amim8fd2o"/>`,
		"fallback": "coolicons:arrow-u-turn-left-up-duocolor-round",
	});
}

export default Component;
