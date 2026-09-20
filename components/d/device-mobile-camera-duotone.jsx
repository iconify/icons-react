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
		"content": `<style>.cjp4rlbqg {
  d: path("M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM140 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}

.cuyn6tgcc {
  fill: currentColor;
}

.dfsamqbrh {
  d: path("M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="dfsamqbrh"/><path class="cjp4rlbqg"/></g>`,
		"fallback": "ph:device-mobile-camera-duotone",
	});
}

export default Component;
