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
		"content": `<style>.u9p3kugfg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 9L21 9M3 15L21 15M12 3L12 9M7 9L7 15M17 9L17 15M12 15L12 21");
}
</style><path class="u9p3kugfg"/>`,
		"fallback": "keyline-icons:brick-wall-sharp",
	});
}

export default Component;
