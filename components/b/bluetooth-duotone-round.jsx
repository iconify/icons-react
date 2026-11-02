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
		"content": `<style>.pbev39b6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 8l7 7a1.414 1.414 0 0 1 0 2l-2 2c-.369.369-1-.262-1-1V6c0-.738.631-1.369 1-1l2 2a1.414 1.414 0 0 1 0 2l-7 7");
}
</style><path class="pbev39b6a"/>`,
		"fallback": "coolicons:bluetooth-duotone-round",
	});
}

export default Component;
