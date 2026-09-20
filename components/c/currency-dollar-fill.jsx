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
		"content": `<style>.l9-toybpf {
  fill: currentColor;
  d: path("M160 152a16 16 0 0 1-16 16h-8v-32h8a16 16 0 0 1 16 16m72-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-56 24a32 32 0 0 0-32-32h-8V88h4a16 16 0 0 1 16 16a8 8 0 0 0 16 0a32 32 0 0 0-32-32h-4v-8a8 8 0 0 0-16 0v8h-4a32 32 0 0 0 0 64h4v32h-8a16 16 0 0 1-16-16a8 8 0 0 0-16 0a32 32 0 0 0 32 32h8v8a8 8 0 0 0 16 0v-8h8a32 32 0 0 0 32-32m-76-48a16 16 0 0 0 16 16h4V88h-4a16 16 0 0 0-16 16");
}
</style><path class="l9-toybpf"/>`,
		"fallback": "ph:currency-dollar-fill",
	});
}

export default Component;
