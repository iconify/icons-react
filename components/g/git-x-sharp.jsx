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
		"content": `<style>.xfqbr3bdu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 22L6 9M18 13.5L18 6L12 6M15.7071 15.7071L21.2929 21.2929M21.2929 15.7071L15.7071 21.2929M6 3C7.6569 3 9 4.3431 9 6C9 7.6569 7.6569 9 6 9C4.3431 9 3 7.6569 3 6C3 4.3431 4.3431 3 6 3Z");
}
</style><path class="xfqbr3bdu"/>`,
		"fallback": "keyline-icons:git-x-sharp",
	});
}

export default Component;
