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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r-892qiye {
  d: path("M3 3h10v18H3Zm0 6h10");
}

.w_hd4bg-f {
  stroke-opacity: 0.4;
  d: path("M13 12h4v5h4V7l-3-3");
}
</style><g class="nrj6p8qat"><path class="w_hd4bg-f"/><path class="r-892qiye"/></g>`,
		"fallback": "coolicons:fuel-duocolor-sharp",
	});
}

export default Component;
