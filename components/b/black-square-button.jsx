import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iyalgndwr {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.p47fz8bpy {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M30 28a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2z");
}
</style><path class="iyalgndwr"/><path class="p47fz8bpy"/>`,
		"fallback": "twemoji:black-square-button",
	});
}

export default Component;
