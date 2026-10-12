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
		"content": `<style>.it9ab7g8p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1L12 19M3 10L21 10M3 22L21 22");
}
</style><path class="it9ab7g8p"/>`,
		"fallback": "keyline-icons:diff-sharp-duotone",
	});
}

export default Component;
