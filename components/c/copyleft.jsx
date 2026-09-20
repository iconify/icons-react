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
		"content": `<style>.ksk7gzmac {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a48 48 0 0 1-86.4 28.81a8 8 0 0 1 12.8-9.61a32 32 0 1 0 0-38.4a8 8 0 0 1-12.8-9.61A48 48 0 0 1 176 128");
}
</style><path class="ksk7gzmac"/>`,
		"fallback": "ph:copyleft",
	});
}

export default Component;
