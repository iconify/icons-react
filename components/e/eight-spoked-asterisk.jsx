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
		"content": `<style>.acd955y6g {
  fill: var(--svg-color--fff, #fff);
  d: path("M31.999 16h-9.171l6.899-6.899a2 2 0 1 0-2.828-2.828L20 13.172V4a2 2 0 0 0-4 0v9.171L9.101 6.272A2 2 0 1 0 6.273 9.1l6.9 6.9H4a2 2 0 0 0-.001 4h9.174l-6.9 6.9A2 2 0 0 0 9.1 29.728l6.9-6.9V32a2 2 0 0 0 4 0v-9.172l6.899 6.899a2 2 0 1 0 2.828-2.828L22.828 20h9.171a2 2 0 1 0 0-4");
}

.u5zlojb3x {
  fill: var(--svg-color--77b255, #77b255);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="u5zlojb3x"/><path class="acd955y6g"/>`,
		"fallback": "twemoji:eight-spoked-asterisk",
	});
}

export default Component;
