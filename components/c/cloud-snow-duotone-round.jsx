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

.ji9rt6bca {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15a4 4 0 1 1 0-8c2-6 11-5 11 2a3 3 0 0 1 0 6Zm1 3h.01M12 18h.01M16 18h.01M10 21h.01M14 21h.01");
}

.q8q-244ks {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 15a4 4 0 0 1 0-8c2-6 11-5 11 2a3 3 0 1 1 0 6Z");
}
</style><g class="ft5dv1b6b"><path class="q8q-244ks"/><path class="ji9rt6bca"/></g>`,
		"fallback": "coolicons:cloud-snow-duotone-round",
	});
}

export default Component;
