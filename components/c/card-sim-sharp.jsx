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
		"content": `<style>.dshzxol2p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L14 2L19 7L19 22L5 22L5 2ZM9 12L15 12L15 18L9 18L9 12Z");
}
</style><path class="dshzxol2p"/>`,
		"fallback": "keyline-icons:card-sim-sharp",
	});
}

export default Component;
