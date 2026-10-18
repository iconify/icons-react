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
		"content": `<style>.ijgu-vclp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21L12 3M8 7L12 3L16 7M3 12L8 12M16 12L21 12");
}
</style><path class="ijgu-vclp"/>`,
		"fallback": "keyline-icons:arrow-up-through-line-duotone",
	});
}

export default Component;
