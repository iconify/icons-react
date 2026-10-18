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
		"content": `<style>.vuf0a7bbw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L21 12M16.7071 7.7071L21 12L16.7071 16.2929M12 2L12 9M12 15L12 22");
}
</style><path class="vuf0a7bbw"/>`,
		"fallback": "keyline-icons:arrow-right-through-line-sharp-fill",
	});
}

export default Component;
