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
		"content": `<style>.hugf_jbtv {
  fill: currentColor;
  d: path("M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-104-64h56v24h-56Zm-16 24H64v-24h56Zm-56 16h56v24H64Zm72 0h56v24h-56Z");
}
</style><path class="hugf_jbtv"/>`,
		"fallback": "ph:garage-fill",
	});
}

export default Component;
