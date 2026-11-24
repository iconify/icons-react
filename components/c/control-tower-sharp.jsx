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
		"content": `<style>.d4-65iw6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h18l-4 6H7zm6 6v8m6-8v8M3 21h18M12 7V3M8 7l2 6m6-6l-2 6");
}
</style><path class="d4-65iw6s"/>`,
		"fallback": "coolicons:control-tower-sharp",
	});
}

export default Component;
