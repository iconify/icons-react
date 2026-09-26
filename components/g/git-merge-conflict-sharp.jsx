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
		"content": `<style>.nnmbmdbyi {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 22L5.5 11M18 15L18 6L11 6M2.7071 2.7071L8.2929 8.2929M8.2929 2.7071L2.7071 8.2929M18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15Z");
}
</style><path class="nnmbmdbyi"/>`,
		"fallback": "keyline-icons:git-merge-conflict-sharp",
	});
}

export default Component;
