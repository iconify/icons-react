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
		"content": `<style>.k_1cykbqw {
  fill: currentColor;
  d: path("m18.894 6.553l3 6c.07.139.106.292.106.447v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3c0-.155.036-.308.106-.447l3-6C5.848 5.069 7.307 4 9 4h6c1.693 0 3.152 1.069 3.894 2.553m-1.788.894C16.706 6.649 15.926 6 15 6H9c-.926 0-1.706.649-2.106 1.447L4.618 12h14.764ZM6 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="k_1cykbqw"/>`,
		"fallback": "coolicons:hard-drive-fill-round",
	});
}

export default Component;
