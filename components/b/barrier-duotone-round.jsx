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
		"content": `<style>.d9-92qdpd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 7a1 1 0 0 1 1 1v5H4a1 1 0 0 1-1-1V7Z");
}

.ft5dv1b6b {
  fill: none;
}

.spxflde4o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h17a1 1 0 0 1 1 1v5H4a1 1 0 0 1-1-1zm2 6v5m14-5v5M3 18h4m10 0h4M3 7l6 6m0-6l6 6m0-6l6 6");
}
</style><g class="ft5dv1b6b"><path class="d9-92qdpd"/><path class="spxflde4o"/></g>`,
		"fallback": "coolicons:barrier-duotone-round",
	});
}

export default Component;
