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
		"content": `<style>.y9hv_s-kg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m19 7l-4-4l-4 4m4-4v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8");
}
</style><path class="y9hv_s-kg"/>`,
		"fallback": "coolicons:arrow-u-turn-right-up-duotone",
	});
}

export default Component;
