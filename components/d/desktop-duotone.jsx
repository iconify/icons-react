import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iso24kb0o {
  d: path("M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8");
}

.zvnujgbtg {
  d: path("M224 64v88H32V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="zvnujgbtg"/><path class="iso24kb0o"/></g>`,
		"fallback": "ph:desktop-duotone",
	});
}

export default Component;
