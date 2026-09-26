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
		"content": `<style>.fkx37hb-b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2L4 2L4 22L11 22M14 2L20 8L20 13M14 2L14 8L20 8M14 18L14 16L20 16L20 18M17 16L17 22M15 22L19 22");
}
</style><path class="fkx37hb-b"/>`,
		"fallback": "keyline-icons:file-type-corner-sharp",
	});
}

export default Component;
