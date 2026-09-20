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

.k-hmvyqnc {
  d: path("M208 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r_9aubc1g {
  d: path("M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM140 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><g class="cuyn6tgcc"><path class="k-hmvyqnc"/><path class="r_9aubc1g"/></g>`,
		"fallback": "ph:device-tablet-camera-duotone",
	});
}

export default Component;
