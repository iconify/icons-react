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
		"content": `<style>.u6z_-hbqk {
  fill: currentColor;
  d: path("M176 152a16 16 0 0 1-16 16h-48v-32h48a16 16 0 0 1 16 16m64-24A104 104 0 1 1 136 24a104.11 104.11 0 0 1 104 104m-48 24a32 32 0 0 0-15.51-27.42A32 32 0 0 0 160 73v-9a8 8 0 0 0-16 0v8h-16v-8a8 8 0 0 0-16 0v8H96a8 8 0 0 0 0 16v80a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h16v8a8 8 0 0 0 16 0v-8a32 32 0 0 0 32-32m-24-48a16 16 0 0 0-16-16h-40v32h40a16 16 0 0 0 16-16");
}
</style><path class="u6z_-hbqk"/>`,
		"fallback": "ph:currency-btc-fill",
	});
}

export default Component;
