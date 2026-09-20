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

.hghlb21nm {
  d: path("M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M72 160v40H32Zm120 40H88v-56L192 40Z");
}

.mjggzcciw {
  d: path("M80 140.7V208H32a8 8 0 0 1-5.66-13.66Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="mjggzcciw"/><path class="hghlb21nm"/></g>`,
		"fallback": "ph:cell-signal-low-duotone",
	});
}

export default Component;
