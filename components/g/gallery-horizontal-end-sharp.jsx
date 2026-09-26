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
		"content": `<style>.hl9ouetbj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 3L21 3L21 21L11 21L11 3ZM7 4L7 20M3 6L3 18");
}
</style><path class="hl9ouetbj"/>`,
		"fallback": "keyline-icons:gallery-horizontal-end-sharp",
	});
}

export default Component;
