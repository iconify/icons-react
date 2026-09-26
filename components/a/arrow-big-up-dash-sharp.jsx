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
		"content": `<style>.vkcakq44t {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2L20 10L16 10L16 18L8 18L8 10L4 10ZM7 22L17 22");
}
</style><path class="vkcakq44t"/>`,
		"fallback": "keyline-icons:arrow-big-up-dash-sharp",
	});
}

export default Component;
