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
		"content": `<style>.sy9ih8b9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14v3h-2v12h2v3H5v-3h2V6H5zm8 5l-3 4h4l-3 4");
}
</style><path class="sy9ih8b9d"/>`,
		"fallback": "coolicons:fuse-sharp",
	});
}

export default Component;
