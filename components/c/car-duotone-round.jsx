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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.igclk3bhz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 18H6a2 2 0 0 1-2-2v-6l2-4c.613-1.226 1.774-2 3-2h6c1.226 0 2.387.774 3 2l2 4v6a2 2 0 0 1-2 2zm-6 0h2v2H6Zm10 0h2v2h-2ZM3 10h18M8 14h.01M16 14h.01");
}

.le70crjja {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 16v-6l2-4c.569-1.137 1.695-1.999 3-2h6c1.305.001 2.431.863 3 2l2 4v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2");
}
</style><g class="ft5dv1b6b"><path class="le70crjja"/><path class="igclk3bhz"/></g>`,
		"fallback": "coolicons:car-duotone-round",
	});
}

export default Component;
